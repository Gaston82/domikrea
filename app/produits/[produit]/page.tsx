import { notFound } from 'next/navigation';
import Image from 'next/image';
import Photo1 from '../../../public/stock/photo1.jpg';
import Photo2 from '../../../public/stock/photo2.jpg';
import Photo3 from '../../../public/stock/photo3.jpg';
import Photo4 from '../../../public/stock/photo4.jpg';
import Photo5 from '../../../public/stock/photo5.jpg';
import Photo6 from '../../../public/stock/photo6.jpg';
import Photo7 from '../../../public/stock/photo7.jpg';
import Photo8 from '../../../public/stock/photo8.jpg';
import Photo9 from '../../../public/stock/photo9.jpg';

const categories = [
  {
    id: 'nuages',
    name: 'Nuages',
    url: Photo1.src,
  },
  {
    id: 'etoiles',
    name: 'Étoiles',
    url: Photo2.src,
  },
  {
    id: 'lunes',
    name: 'Lunes',
    url: Photo3.src,
  },
  {
    id: 'poules',
    name: 'Poules',
    url: Photo4.src,
  },
  {
    id: 'fanions',
    name: 'Fanions',
    url: Photo5.src,
  },
  {
    id: 'guirlandes',
    name: 'Guirlandes',
    url: Photo6.src,
  },
  {
    id: 'bananes',
    name: 'Bananes',
    url: Photo7.src,
  },
  {
    id: 'pochettes-portables',
    name: 'Pochettes portables',
    url: Photo8.src,
  },
  {
    id: 'trousses',
    name: 'Trousses',
    url: Photo9.src,
  },
];

const images = [
  {
    src: 'https://images.unsplash.com/photo-1541944743827-e04aa6427c33',
    alt: 'Knitting',
  },
  {
    src: 'https://images.unsplash.com/photo-1486129273931-27820249c615',
    alt: 'Yarn',
  },
  {
    src: 'https://images.unsplash.com/photo-1663612619657-f876bfca791e',
    alt: 'Sewing',
  },
  {
    src: 'https://images.unsplash.com/photo-1651177571506-6d38447d987b',
    alt: 'Embroidery',
  },
  {
    src: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443',
    alt: 'Clay',
  },
  {
    src: 'https://images.unsplash.com/photo-1498075702571-ecb018f3752d',
    alt: 'Drawing',
  },
];
export async function generateStaticParams() {
  return categories.map((category) => ({ produit: category.id }));
}

const ProduitsDetailPage = ({ params }: { params: { produit: string } }) => {
  const category = categories.find(
    (category) => category.id === params.produit
  );

  if (!category) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center justify-center w-full px-[100px] py-[50px] pb-[200px] gap-[50px]">
      <div className="flex gap-8 flex-col md:flex-row items-start items-center md:items-start w-full">
        <div className="flex flex-col w-full md:w-3/5 gap-4">
          <h2 className="font-bodoni text-3xl">{category.name}</h2>
          <p className="font-poppins leading-[3rem] font-light text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            magna non sem tristique volutpat. Pellentesque venenatis orci eu
            nulla molestie, sit amet aliquet urna varius. Suspendisse id
            pharetra leo, quis mollis lorem. Aenean lacinia tellus lectus, at
            volutpat lectus rhoncus a.
          </p>
        </div>
        <Image
          className="w-full md:w-2/5 h-[350px] object-cover"
          src={category.url}
          alt={category.name}
          width={600}
          height={400}
        />
      </div>
      <div className="w-full h-[1px] bg-gray-300"></div>
      <div className="grid w-[80%] gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <Image
            key={index}
            className="w-full h-[250px] object-cover"
            src={image.src}
            alt={image.alt}
            width={200}
            height={100}
          />
        ))}
      </div>
    </main>
  );
};

export default ProduitsDetailPage;
