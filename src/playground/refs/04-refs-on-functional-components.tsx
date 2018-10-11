import React, { createRef } from 'react';

// interface IProps {}

// const CustomTextInput = (props: IProps) => {
const CustomTextInput = () => {
  // textInput must be declared here so the ref can refer to it
  const textInput = createRef<HTMLInputElement>();

  function handleClick() {
    if (textInput.current) {
      textInput.current.focus();
    }
  }

  return (
    <div>
      <input type="text" ref={textInput} />

      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
};
