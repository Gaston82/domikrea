import Image from 'next/image';

interface CategoryProps {
  url: string;
  text: string;
}

const Category = ({ url, text }: CategoryProps): JSX.Element => {
  return (
    <div className="relative aspect-square w-full h-full overflow-hidden">
      <span
        className={
          'font-bodoni absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl z-10 text-center'
        }
      >
        {text}
      </span>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <Image
        className="w-full h-full object-cover"
        src={url}
        alt={text}
        width="200"
        height="200"
      />
    </div>
  );
};

export default Category;
