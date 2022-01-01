import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("default");
  const { id } = useParams();
  useEffect(() => {
    const ele = data.find((p) => p.id === parseInt(id));
    if (ele !== undefined) {
      const { name } = ele;
      setName(name);
    }
  }, []);
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Person;
