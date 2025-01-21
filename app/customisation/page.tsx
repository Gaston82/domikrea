import ImageGrid, { Image } from '@/components/ImageGrid';
import Head from 'next/head';
import React from 'react';

const images: Image[] = [
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

const Customisation = () => {
  return (
    <>
      <Head>
        <title>Domikréa - Customisation</title>
        <meta name="description" content="TODO: Domikrea description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full px-[100px] py-[50px] pb-[200px] gap-[30px]">
        <h2 className="font-bodoni self-start text-3xl">Customisation</h2>
        <div className="w-full flex flex-col gap-[30px]">
          <p className="font-poppins leading-[3rem] font-light text-justify w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            magna non sem tristique volutpat. Pellentesque venenatis orci eu
            nulla molestie, sit amet aliquet urna varius. Suspendisse id
            pharetra leo, quis mollis lorem. Aenean lacinia tellus lectus, at
            volutpat lectus rhoncus a. Fusce magna nibh, convallis ac ultricies
            sed, volutpat quis dolor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec a magna non sem tristique volutpat.
            Pellentesque venenatis orci eu nulla molestie, sit amet aliquet urna
            varius.
          </p>
          <p className="font-poppins leading-[3rem] font-light text-justify w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            magna non sem tristique volutpat. Pellentesque venenatis orci eu
            nulla molestie, sit amet aliquet urna varius. Suspendisse id
            pharetra leo, quis mollis lorem. Aenean lacinia tellus lectus, at
            volutpat lectus rhoncus a. Fusce magna nibh, convallis ac ultricies
            sed, volutpat quis dolor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec a magna non sem tristique volutpat.
            Pellentesque venenatis orci eu nulla molestie, sit amet aliquet urna
            varius.
          </p>
        </div>
        <ImageGrid images={images} />
      </main>
    </>
  );
};

export default Customisation;
