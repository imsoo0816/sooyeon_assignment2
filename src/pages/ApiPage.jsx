import { useState, useEffect } from "react";
import axios from "axios";

function ApiPage() {
  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
      } catch (e) {
        setError("API 요청 실패");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>API 요청 성공</h1>
    </div>
  );
}

export default ApiPage;