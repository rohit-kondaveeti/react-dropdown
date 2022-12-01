import React, { useState, useEffect } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected("");
    setItems([
      { id: 1, name: "Yes" },
      { id: 2, name: "Probably Not" },
    ]);
  }, []);

  const itemSelectHandler = (name) => {
    setSelected(name);
    setHover(false);
  };

  return (
    <>
      <h1>React Dropdown</h1>
      <h2>{selected}</h2>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="dropdown-section"
      >
        <button>Select</button>
        {hover ? (
          <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
            {items.map((item) => (
              <li
                style={{
                  padding: 15,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#ccc",
                  cursor: "pointer",
                }}
                onClick={() => itemSelectHandler(item.name)}
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default App;
