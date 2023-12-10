import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [image, setImage] = useState(null);
  const [language, setLanguage] = useState('');
  const [response, setResponse] = useState({});

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('language', language);

    try {
      const res = await axios.post(
        'http://localhost:3001/givemetext',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setResponse(res.data);
    } catch (err) {
      setResponse(err.response.data);
    }
  };

  return (
    <form
      className="flex flex-col max-w-[600px] w-full"
      onSubmit={handleSubmit}
    >
      <input type="file" onChange={handleImage} />
      <br />
      <label>
        <input
          type="radio"
          name="language"
          value="english"
          onChange={handleLanguage}
        />
        English
      </label>
      <label>
        <input
          type="radio"
          name="language"
          value="spanish"
          onChange={handleLanguage}
        />
        Spanish
      </label>
      <br />
      <button
        className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center disabled:opacity-30"
        type="submit"
      >
        Submit
      </button>
      <br />
      <p>{JSON.stringify(response)}</p>
    </form>
  );
}

export default Form;
