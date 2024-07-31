import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <div>
      <button
        style={{
          maxWidth: "140px",
          minWidth: "80px",
          height: "30px",
          marginRight: "5px",
        }}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;

/* 

Todo:
1. <Button> props {title, onClick} from parents component
2. Button style applied inline
3. {title} displayed on button

*/
