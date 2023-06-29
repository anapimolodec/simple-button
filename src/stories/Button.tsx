import {useState} from 'react';
import './button.css';

interface ButtonProps {
  radius?: number; //we can edit border radius
  backgroundColor?: string; //background color
  emoji: 'clap' | 'heart' | 'star'; //emoji on the button
}
const emojiStyles = {
  clap: "👏",
  heart: "💔",
  star: "🌟",
};

export const Button = ({
  radius = 50,
  backgroundColor,
  emoji = 'clap'
}: ButtonProps) => {
//here comes our button
  const [ccolor, setCcolor] = useState<string>("");
  
  function changeColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    setCcolor(randomColor);
  }
  const ButtonClass = "text-5xl m-4 p-8 shadow-xl bg-gray-400 ";
  return (
    <button 
      className = {ButtonClass}
      style = {{backgroundColor, borderRadius: radius}}
      >
      {emojiStyles[emoji]}
    </button>
  );
};
// import React from 'react';
// import './button.css';

// interface ButtonProps {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary?: boolean;
//   /**
//    * What background color to use
//    */
//   backgroundColor?: string;
//   /**
//    * How large should the button be?
//    */
//   size?: 'small' | 'medium' | 'large';
//   /**
//    * Button contents
//    */
//   label: string;
//   /**
//    * Optional click handler
//    */
//   onClick?: () => void;
// }

// /**
//  * Primary UI component for user interaction
//  */
// export const Button = ({
//   primary = false,
//   size = 'medium',
//   backgroundColor,
//   label,
//   ...props
// }: ButtonProps) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       {...props}
//     >
//       {label}
//       <style jsx>{`
//         button {
//           background-color: ${backgroundColor};
//         }
//       `}</style>
//     </button>
//   );
// };
