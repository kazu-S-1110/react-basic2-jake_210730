const ChildArea = (props) => {
  const { open, text } = props;
  return (
    <>
      {open && (
        <div>
          <h1>child component</h1>
          <h3>{text}</h3>
        </div>
      )}
    </>
  );
};

export default ChildArea;
