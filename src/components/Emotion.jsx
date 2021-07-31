/** @jsxRuntime classic * /
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

const Emotion = () => {
  //styled-componentのように補完がきかせられる。
  const containerStyle = css`
    background-color: #9af8f8;
    border: solid #fff;
    border-radius: 20px;
  `;
  const pStyle = css({
    //inlineのようにすることも可能。
    color: '#ff4343',
  });
  const Sbutton = styled.button`
    background-color: #00ffae;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
      background-color: #000000;
      color: #ffffff;
      cursor: pointer;
    }
  `;

  const buttonStyle = css``;
  return (
    <div css={containerStyle}>
      <p css={pStyle}>-- Emotion --</p>
      <Sbutton className={buttonStyle}>Fly!</Sbutton>
    </div>
  );
};

export default Emotion;
