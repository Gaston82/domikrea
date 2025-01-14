import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Photo7 from '../../public/stock/photo7.jpg';

const Retouche = () => {
  return (
    <>
      <Head>
        <title>Domikréa - Retouche</title>
        <meta name="description" content="TODO: Domikrea description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full px-[100px] py-[50px] pb-[200px] gap-[30px]">
        <h2 className="font-bodoni self-start text-3xl">Retouche</h2>
        <div className="w-full flex flex-col gap-[30px]">
          <div className="flex flex flex-col md:flex-row w-full gap-[60px]">
            <p className="font-poppins leading-[3rem] font-light text-justify md:flex-[2] w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              magna non sem tristique volutpat. Pellentesque venenatis orci eu
              nulla molestie, sit amet aliquet urna varius. Suspendisse id
              pharetra leo, quis mollis lorem. Aenean lacinia tellus lectus, at
              volutpat lectus rhoncus a. Fusce magna nibh, convallis ac
              ultricies sed, volutpat quis dolor. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec a magna non sem tristique
              volutpat. Pellentesque venenatis orci eu nulla molestie, sit amet
              aliquet urna varius.
            </p>
            <Image
              className="md:flex-[1] w-full h-auto object-cover"
              src={Photo7}
              alt="Photo7"
              width={200}
              height={400}
            />
          </div>
          {/* TODO: add button to download PDF price file */}
        </div>
      </main>
    </>
  );
};

export default Retouche;
