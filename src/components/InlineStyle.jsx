const InlineStyle = () => {
  const containerStyle = {
    border: 'solid 10px red',
    borderRadius: '30px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  };
  const titleStyle = {
    margin: '13px',
    color: 'red',
  };
  const buttonStyle = {
    backgroundColor: 'aqua',
    border: 'none',
    borderRadius: '20px',
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>-- InlineStyle --</p>
      <button style={buttonStyle}>Fly!</button>
    </div>
  );
};

export default InlineStyle;
