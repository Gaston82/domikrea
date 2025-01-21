import { Bodoni_Moda } from 'next/font/google';

const bodoniModa = Bodoni_Moda({ weight: '400', subsets: ['latin'] });
interface ButtonProps {
  element: 'anchor' | 'button';
  text: string;
  href?: string;
}
const Button = ({ element, text, href }: ButtonProps): JSX.Element =>
  element === 'button' ? (
    <button
      className={`${bodoniModa.className} flex items-center justify-center text-white bg-primary border border-primary px-10 py-2.5 rounded-md text-base transition duration-200 hover:text-primary hover:bg-transparent`}
    >
      {text}
    </button>
  ) : (
    <a
      className={`${bodoniModa.className} flex items-center justify-center text-white bg-primary border border-primary px-10 py-2.5 rounded-md text-base transition duration-200 hover:text-primary hover:bg-transparent`}
      href={href}
    >
      {text}
    </a>
  );

export default Button;
