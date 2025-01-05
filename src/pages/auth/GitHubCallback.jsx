import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function GitHubCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // To handle loading state

  useEffect(() => {
    const code = searchParams.get('code');

    if (code && !localStorage.getItem("accessToken")) {
      // Step 1: Get access token
      async function getAccessToken() {
        setLoading(true);
        fetch(`https://launch-mom-app.jack-1897.workers.dev/getAccessToken?code=${code}`, {
          method: 'GET',
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.access_token) {
              localStorage.setItem("accessToken", data.access_token);
            }
          })
          .catch((err) => setError(err))
          .finally(() => setLoading(false));
      }
      getAccessToken();
    } else {
      setLoading(false);
    }
  }, [searchParams]);

  async function getUserData() {
    fetch('https://api.github.com/user', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      },
    })
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((err) => console.error("Unable to get user data", err));
  }

  // Render based on state conditions
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🔄</div>
          <h1 className="text-2xl font-bold text-fun-purple mb-2">
            Logging you in...
          </h1>
          <p className="text-gray-600">Just a moment while we get things ready!</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-red-500 mb-2">
            Login Failed
          </h1>
          <p className="text-gray-600">{error.message || 'Something went wrong!'}</p>
        </div>
      </div>
    );
  }

  if (userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-green-500 mb-2">
            Welcome, {userData.login || 'User'}!
          </h1>
          <p className="text-gray-600">You are successfully logged in.</p>
          <pre className="text-left bg-gray-100 p-4 rounded">
            {JSON.stringify(userData, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  // Default UI for logged-in state
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <p className="text-lg font-semibold text-green-600">
        Logged In successfully
      </p>
      <button
        onClick={getUserData}
        className="px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
      >
        Get User Data
      </button>
    </div>
  );
}