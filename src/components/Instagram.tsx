import React, { useEffect, useState } from "react";

const Instagram = () => {
  const [res, setRes] = useState(null);

  useEffect(() => {
    fetch("https://api.dev.techlit.in/feed")
      .then((res) => res.json())
      .then((data) => setRes(data));
    console.log(res);
  }, []);

  return <div className="bg-gray-200 pe-10">{res}</div>;
};

export default Instagram;
