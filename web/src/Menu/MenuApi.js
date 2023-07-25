// MenuApi.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MenuApi = () => {
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    axios.get('/api/users').then(res =>{
      setData(res.data)
    }).catch(err => {
      console.log(err);
    });
  },[]);

  return (
    <div>
    {data.map(user => (
      <div key={user.id}>
        <div>{user.username}</div>
        <div>{user.login}</div>
        <div>{user.password}</div>
      </div>
    ))}
    </div>
  );
};

export default MenuApi;

  // const [error, setError] = useState(null);
  // console.log('api sending?');
  // const temp = 'http://127.0.0.1:8000/make-api-call';
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(temp); // Update the URL

  //       if (response.data.error) {
  //         setError(response.data.error);
  //       } else {
  //         setData(response.data.data);
  //       }
  //     } catch (error) {
  //       setError('Failed to fetch data from the API');
  //     }
  //   };
  //   fetchData();
  // }, []);
