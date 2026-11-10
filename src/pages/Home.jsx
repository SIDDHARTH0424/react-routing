import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  // Effect 1: a clock that ticks every second.
  // The cleanup function stops the timer when the page is left.
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Effect 2: sync the browser tab title with state.
  // It re-runs only when `count` changes.
  useEffect(() => {
    document.title = `Clicked ${count} times`;
    return () => {
      document.title = "React Hooks & Routing";
    };
  }, [count]);

  return (
    <>
      <h1>Home</h1>
      <section className="panel">
        <h2>Live clock (useEffect + cleanup)</h2>
        <p className="big">{time.toLocaleTimeString()}</p>
      </section>
      <section className="panel">
        <h2>Counter (useState + useEffect)</h2>
        <p className="big">{count}</p>
        <div className="row">
          <button onClick={() => setCount(count + 1)}>Add</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <span className="muted">Watch the browser tab title change.</span>
        </div>
      </section>
    </>
  );
}
