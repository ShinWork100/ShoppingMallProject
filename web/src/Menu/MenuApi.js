// MenuApi.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MenuApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  console.log('api sending?');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/make-api-call'); // Update the URL

        if (response.data.error) {
          setError(response.data.error);
        } else {
          setData(response.data.data);
        }
      } catch (error) {
        setError('Failed to fetch data from the API');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default MenuApi;
