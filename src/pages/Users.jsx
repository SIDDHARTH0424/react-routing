import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  // Fetch once when the page mounts (empty dependency array)
  useEffect(() => {
    let cancelled = false;

    async function loadUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Could not load users.");
        const data = await res.json();
        if (!cancelled) setUsers(data);
      } catch (err) {
        if (!cancelled) setError(err.message || "Something went wrong.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadUsers();
    // Cleanup: ignore the result if the user leaves the page early
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h1>Users</h1>
      <input
        className="search"
        type="search"
        placeholder="Search by name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">{error}</p>}

      {!loading && !error && (
        <ul className="user-list">
          {filtered.map((u) => (
            <li key={u.id}>
              <Link to={`/users/${u.id}`}>{u.name}</Link>
              <div className="muted">{u.email}</div>
            </li>
          ))}
          {filtered.length === 0 && <p className="status">No users match.</p>}
        </ul>
      )}
    </>
  );
}
