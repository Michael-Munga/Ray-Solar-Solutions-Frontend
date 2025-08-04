import axios from "axios";

// Function to determine the appropriate API base URL with enhanced fallback logic
const getBaseURL = () => {
  // First, try to use the VITE_API_URL environment variable
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  // Environment-specific fallbacks using correct Vite environment variables
  const mode = import.meta.env.MODE || 'development';
  
  if (mode === 'development') {
    console.warn("VITE_API_URL not defined, using development fallback");
    return "http://localhost:5555";
  }

  if (mode === 'staging') {
    console.warn("VITE_API_URL not defined, using staging fallback");
    return "https://staging-api.example.com";
  }

  if (mode === 'production') {
    console.error("VITE_API_URL not defined in production environment!");
    // In production, we should not use a fallback that could expose data
    // Instead, we should throw an error or use a more secure default
    throw new Error("VITE_API_URL must be defined in production environment");
  }

  // Generic fallback with warning
  console.warn("VITE_API_URL not defined, using generic localhost fallback");
  return "http://localhost:5555";
};

// Get the base URL with enhanced error handling
let baseURL;
try {
  baseURL = getBaseURL();
} catch (error) {
  console.error("Failed to configure API base URL:", error.message);
  // Fallback to localhost in case of error, but log the issue
  baseURL = "http://localhost:3001";
  console.warn("Using emergency fallback URL - this should be fixed!");
}

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

