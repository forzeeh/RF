import React from 'react';
import './Icon.scss';

interface IIcon {
  src: string;
  alt?: string;
  size?: number | string;
  className?: string;
  onClick?: () => void;
}

const Icon: React.FC<IIcon> = ({
  src,
  alt = 'Icon',
  size = 24,
  className = '',
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`icon ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
      onClick={handleClick}
    />
  );
};

export default Icon; 