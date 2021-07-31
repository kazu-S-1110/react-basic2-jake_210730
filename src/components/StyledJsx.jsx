const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>-- Styled JSX --</p>
        <button>Fly!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 10px teal;
          background-color: red;
          border-radius: 30px;
          padding: 10px;
          display: flex;
          flex-direction: column;
        }
        p {
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default StyledJsx;
