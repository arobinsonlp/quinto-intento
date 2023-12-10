import React, { useState, useEffect } from "react";

const RenderData = ({ data }) => {
  return (
    <>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <h3>{key}</h3>
          <p>{value.toString()}</p>
        </div>
      ))}
    </>
  );
};

const FetchData = ({ url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return <RenderData data={data} />;
};

export default FetchData;
