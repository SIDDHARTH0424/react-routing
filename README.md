# React Hooks & Routing

A React (Vite) app using **react-router-dom** with multiple pages and the `useState` / `useEffect` hooks.

## Pages
| Route | Page | Hooks used |
|-------|------|------------|
| `/` | Home | `useState`, `useEffect` (timer with cleanup, document title) |
| `/users` | Users list | `useState`, `useEffect` (fetch with loading and error states), search filter |
| `/users/:id` | User detail | `useParams`, `useEffect` that re-runs when the id changes |
| `/about` | About | none |
| `*` | Not found | none |

## Notes
- `HashRouter` is used so routes still work on GitHub Pages.
- Data comes from the free [JSONPlaceholder](https://jsonplaceholder.typicode.com) API.
- Effects clean up after themselves (clearInterval, ignore late responses).

## Run
```bash
npm install
npm run dev
```
Open http://localhost:5173

Live: https://siddharth0424.github.io/react-routing/
