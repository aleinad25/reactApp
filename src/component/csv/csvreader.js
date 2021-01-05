import React, { useState, useEffect } from 'react';
import { checkRefunds } from '../repository/PostRefund';
import { CSVReader } from 'react-papaparse';
import axios from 'axios';
export default () => {
  const [refunds, setRefunds] = useState([]);
  const handleOnDrop = data => {
    console.log('---------------------------');
    console.log(data);
    const listRefunds = checkRefunds(data);
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { listRefunds })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = data => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
  };
  return (
    <div>
      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        removeButtonColor="#659cef"
        onRemoveFile={handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
    </div>
  );
};
