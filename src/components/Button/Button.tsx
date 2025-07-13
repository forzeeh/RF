import React from 'react';
import './Button.scss';

interface Buttun {
  value: string;
  onClick?: () => void;
}

const Button: React.FC<Buttun> = ({
  value,
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="custom-btn" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;