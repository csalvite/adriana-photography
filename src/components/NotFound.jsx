const NotFound = ({ text, error }) => {
  return (
    <div className='container'>
      <div>{text}</div>
      <div>{error}</div>
    </div>
  );
};

export default NotFound;
