import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json.slice(0, 5)));
    console.log(data);
  }, []);
  return (
    <div>
      <section>
        {data.map((value, idx) => (
          <div key={idx}>
            <label className="userId"> {value.id}</label>
            <label> {value.name}</label>
            <label> {value.email}</label>
          </div>
        ))}
      </section>
    </div>
  );
}
