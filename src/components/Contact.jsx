import React from "react";
import { useContext } from "react";
import LangContext from "../context/LangContext";

const Contact = () => {
  const { text } = useContext(LangContext);
  let [error, setError] = React.useState({});
  let [input, setInput] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  function validateForms(input) {
    let error = {};
    const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (input.name.length === 0) {
      error.name = "Name required";
    }
    if (input.email.length && regex.test(input.email) === false) {
      error.email = "Please use a valid e-mail format";
    }
    if (input.message.length < 10 || input.message.length === 0) {
      error.message = "At least 10 characters, please";
    }
    return error;
  }
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(validateForms({ ...input, [e.target.name]: e.target.value }));
  };
  return (
    <section
      name='contact'
      className='w-full h-screen flex justify-center items-center p-4 md:mt-[30rem]'
    >
      <form
        method='POST'
        action='https://getform.io/f/61f77192-c233-48e9-a742-652def6dfd55'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-100'>
            {text.contact1}
          </p>
          <p className='text-gray-300 py-4'>{text.contact2}</p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder={text.contact3}
          name='name'
          onInput={(e) => handleChange(e)}
          required
        />
        {error.name && (
          <p className='my-4 text-[#fff6fe] p-2 bg-[#fff2042a]'>
            {text.errorName}
          </p>
        )}
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='email'
          placeholder={text.contact4}
          name='email'
          onChange={(e) => handleChange(e)}
          required
        />
        {error.email && (
          <p className='my-4 text-[#fff6fe] p-2 bg-[#fff2042a]'>
            {text.errorEmail}
          </p>
        )}
        <textarea
          required
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows='10'
          onInput={(e) => handleChange(e)}
          placeholder={text.contact5}
        ></textarea>
        {error.message && (
          <p className='my-4 text-[#fff6fe] p-2 bg-[#fff2042a]'>
            {text.errorMessage}
          </p>
        )}

        {Object.keys(error).length || !input ? (
          <p className='my-4 text-[#fff6fe] p-2 bg-[#fff2042a]'>
            {text.contactAlert}
          </p>
        ) : null}
        {Object.keys(error).length || !input ? null : (
          <button
            disabled={Object.keys(error).length}
            className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center disabled:opacity-30'
          >
            {text.contactButton}
          </button>
        )}
      </form>
    </section>
  );
};

export default Contact;
