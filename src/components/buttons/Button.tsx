import React from 'react';

interface ButtonProps {
  buttonText: string;
  buttonLink: string;
  textColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  buttonLink,
  textColor,
}) => {
  // Define the default text color class
  const defaultTextColorClass = 'text-white';

  // Generate the dynamic text color class based on the prop value
  const textColorClass = textColor
    ? `text-${textColor}`
    : defaultTextColorClass;

  return (
    <a
      className='group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 focus:outline-none focus:ring active:text-white'
      href={buttonLink}
    >
      <span className='absolute -end-full transition-all group-hover:end-4'>
        <svg
          className='h-5 w-5 rtl:rotate-180'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M17 8l4 4m0 0l-4 4m4-4H3'
          />
        </svg>
      </span>
      <span
        className={`text-sm font-medium transition-all group-hover:me-4 ${textColorClass}`}
      >
        {buttonText}
      </span>
    </a>
  );
};
