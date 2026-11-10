import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Re-runs whenever the :id in the URL changes
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError("");

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found.");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setUser(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <>
      <p><Link to="/users">← Back to users</Link></p>
      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">{error}</p>}
      {user && !loading && !error && (
        <section className="panel">
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Company: {user.company.name}</p>
          <p>City: {user.address.city}</p>
        </section>
      )}
    </>
  );
}
