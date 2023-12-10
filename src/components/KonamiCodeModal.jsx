import React from "react";

function KonamiCodeModal(props) {
  const { show, onHide } = props;
  const [hover, setHover] = React.useState("#");
  const handleClick = () => {
    setHover("https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0");
  };
  return (
    <div
      className={`bg-white rounded-lg mx-auto mb-6 z-50 max-w-sm justify-center shadow-xl${
        show ? "" : " hidden"
      }`}
    >
      <header className='py-4 px-6'>
        <h3 className='text-3xl font-bold'>KONAMI CODE ACTIVATED</h3>
      </header>
      <section className='px-6 py-4'>
        <p className='text-2xl font-bold mb-2'>
          ¡Congratulations, you have activated the CODE!
        </p>
        <p className='text-gray-700'>
          Click the button below and access the hidden content.
        </p>
      </section>
      <div className='m-auto px-6 py-4'>
        <a href={hover}>
          <button
            onClick={handleClick}
            className='px-4 py-2 font-bold text-yellow-50 bg-yellow-400 rounded-full shadow-md hover:bg-yellow-700 focus:outline-none focus:shadow-outline-blue active:bg-yellow  -800'
          >
            Check
          </button>
        </a>
        <button
          onClick={onHide}
          className='px-4 py-2 mx-1 font-bold text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
        >
          Close
        </button>
      </div>
    </div>
  );
}
export default KonamiCodeModal;
