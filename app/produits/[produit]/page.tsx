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
    <main className="flex flex-col items-center justify-center w-full p-10 gap-20">
      <h2 className="font-bodoni self-start text-3xl">{category.name}</h2>
      <div className="mt-4">
        <Image
          src={category.url}
          alt={category.name}
          width={600}
          height={400}
        />
      </div>
    </main>
  );
};

export default ProduitsDetailPage;
