'use client'; // This tells Next.js to treat this component as a client-side component.

import { useState, FormEvent } from 'react'; // Import necessary hooks and types from React
import Image from 'next/image';
// Define the structure of the GitHub user profile
interface GitHubProfile {
  login: string;
  avatar_url: string;
  bio: string | null;
  repos_url: string;
}

// Define the structure of each repository in the GitHub profile
interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
}

const Home = () => {
  // Store the GitHub username the user inputs
  const [username, setUsername] = useState(''); 

  // Store the profile data returned from the GitHub API
  const [profile, setProfile] = useState<GitHubProfile | null>(null);

  // Store the list of repositories for the user
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  // Store any error messages
  const [error, setError] = useState<string>('');

  // Function to handle the search when the user submits the form
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the form from refreshing the page
    setError(''); // Clear any previous errors

    try {
      // Fetch the user's profile data from GitHub
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error('User not found'); // If user not found, throw an error
      const data: GitHubProfile = await res.json(); // Parse the JSON data
      setProfile(data); // Set the profile state with the fetched data

      // Fetch the user's repositories using the repos_url from the profile
      const repoRes = await fetch(data.repos_url);
      const repoData: GitHubRepo[] = await repoRes.json(); // Parse the repositories data
      setRepos(repoData); // Set the repos state with the fetched repository data
    } catch (err: unknown) {
      // Handle any errors that occur during the fetch
      if (err instanceof Error) {
        setError(err.message); // Set the error message
      } else {
        setError('An unknown error occurred'); // Generic error message for unknown errors
      }
    }
  };

  // Function to load more repositories when there are more than 30
  const handleLoadMore = async () => {
    const nextPage = repos.length / 30 + 1; // Calculate the next page number
    const repoRes = await fetch(`https://api.github.com/users/${username}/repos?page=${nextPage}`);
    const newRepos: GitHubRepo[] = await repoRes.json(); // Fetch and parse the new repos
    setRepos((prev) => [...prev, ...newRepos]); // Append the new repos to the existing list
  };

  return (
    <div className="container mx-auto p-4"> {/* Main container for the page */}
      
      {/* Simple description about the app */}
      <p>
        GitHub Profile Search App allows users to search for GitHub profiles. 
        It displays the users avatar, bio, and public repositories along with important stats like stars and forks. 
        Built using React, Tailwind, and Next.js, it provides a quick and easy way to access GitHub profiles.
      </p>

      {/* Displaying the GitHub logo */}
      <Image className='img' src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" width={300} height={300} alt="GitHub logo" />

      {/* Error message display */}
      {error && <p className="text-red-500">{error}</p>} {/* If there’s an error, display it */}

      {/* Form input for the user to search by GitHub username */}
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update the username state as the user types
          className="border p-2 rounded w-full" 
          placeholder="Enter GitHub username" // Placeholder for the input field
        /> 
        <br />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-2 rounded">Search</button> {/* Submit button */}
      </form>

      {/* Display the profile if it's available */}
      {profile && (
        <div className="profile">
          {/* Display the user's avatar */}
          <Image src={profile.avatar_url} alt={profile.login} width={300} height={350} className="img" /> 
          <span>Username: <h2>{profile.login}</h2></span> {/* Display the username */}
          <span>Bio: <p>{profile.bio}</p></span> {/* Display the bio if available */}
        </div>
      )}

      {/* Display the list of repositories if any exist */}
      {repos.length > 0 && (
        <div className="repos">
          <h1>Repositories:</h1>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id} className="mb-2">
                {/* Display the repository name as a clickable link */}
                <h1>Repository Name: </h1> 
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  {repo.name}
                </a> 
                <br />
                <h1>Repository Description: </h1> 
                <p>{repo.description}</p> {/* Display the repository description */}
                <p>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</p> {/* Display stars and forks */}
              </li>
            ))}
          </ul>

          {/* Button to load more repositories if available */}
          <button onClick={handleLoadMore} className="bg-blue-500 text-white p-2 mt-4 rounded">
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
