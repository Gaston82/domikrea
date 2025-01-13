import Head from "next/head";
import Image from "next/image";
import React from "react";
import Photo1 from "../../public/stock/photo1.jpg";
import Photo2 from "../../public/stock/photo2.jpg";
import Photo3 from "../../public/stock/photo3.jpg";
import Photo4 from "../../public/stock/photo4.jpg";
import Photo5 from "../../public/stock/photo5.jpg";
import Photo6 from "../../public/stock/photo6.jpg";

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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a magna
      non sem tristique volutpat. Pellentesque venenatis orci eu nulla molestie,
      sit amet aliquet urna varius. Suspendisse id pharetra leo, quis mollis
      lorem. Aenean lacinia tellus lectus, at volutpat lectus rhoncus a. Fusce
      magna nibh, convallis ac ultricies sed, volutpat quis dolor. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Donec a magna non sem
      tristique volutpat. Pellentesque venenatis orci eu nulla molestie, sit
      amet aliquet urna varius.
    </p>
    <p className="font-poppins leading-[3rem] font-light text-justify w-full">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a magna
      non sem tristique volutpat. Pellentesque venenatis orci eu nulla molestie,
      sit amet aliquet urna varius. Suspendisse id pharetra leo, quis mollis
      lorem. Aenean lacinia tellus lectus, at volutpat lectus rhoncus a. Fusce
      magna nibh, convallis ac ultricies sed, volutpat quis dolor. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Donec a magna non sem
      tristique volutpat. Pellentesque venenatis orci eu nulla molestie, sit
      amet aliquet urna varius.
    </p>
  </div>
  <div className="grid w-full md:w-[80%] gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
  <Image
    className="w-full h-[225px] object-cover"
    src={Photo1}
    alt="Photo1"
    width={200}
    height={100}
  />
  <Image
    className="w-full h-[225px] object-cover"
    src={Photo2}
    alt="Photo2"
    width={200}
    height={100}
  />
  <Image
    className="w-full h-[225px] object-cover"
    src={Photo3}
    alt="Photo3"
    width={200}
    height={100}
  />
  <Image
    className="w-full h-[225px] object-cover"
    src={Photo4}
    alt="Photo4"
    width={200}
    height={100}
  />
  <Image
    className="w-full h-[225px] object-cover"
    src={Photo5}
    alt="Photo5"
    width={200}
    height={100}
  />
  <Image
    className="w-full h-[225px] object-cover"
    src={Photo6}
    alt="Photo6"
    width={200}
    height={100}
  />
</div>


</main>

    </>
  );
};

export default Customisation;
