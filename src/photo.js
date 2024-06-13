import React, { useEffect, useState } from 'react';
import './index.css'
const Photo = ({ id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching photo with id:', id);
    fetch(`/photos?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No photo found with id {id}</div>;
  }

  return (
    <div>
      <img
        className="mx-auto h-auto rounded-md"
        src={data.url}
        alt={`image with id= ${id}`}
      />
    </div>
  );
}

export default Photo;
