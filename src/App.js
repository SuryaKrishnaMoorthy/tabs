import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const data = [
  {
    heading: "Heading A",
    names: ["Alex", "Amy", "Angelina"]
  },
  {
    heading: "Heading B",
    names: ["Bear", "Bug", "Book"]
  },
  {
    heading: "Heading C",
    names: ["Cat", "Car", "Camera"]
  }
];
function App() {
  const [key, setKey] = useState("home"),
    [names, setNames] = useState([]);

  const handleClick = (k) => {
    setKey(k);
    const filtered = data.filter((val, i) => val.heading === k);
    console.log(filtered[0].names);
    filtered.length && setNames(filtered[0].names);
  };

  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={handleClick}
        className="mb-3"
      >
        {data.map((val, i) => (
          <Tab key={i} eventKey={val.heading} title={val.heading}></Tab>
        ))}
      </Tabs>
      <ul>
        {names.length ? names.map((name, i) => <li key={i}>{name}</li>) : ""}
      </ul>
    </>
  );
}

export default App;
