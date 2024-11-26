import Head from "next/head";
import Photo1 from "../../public/stock/photo1.jpg";
import Image from "next/image";

const QuiSuisJe = () => {
  return (
    <>
      <Head>
        <title>Domikréa - Qui-suis-je ?</title>
        <meta name="description" content="TODO: Domikrea description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full px-[100px] py-[50px] pb-[200px] gap-[30px]">
        <h2 className="font-bodoni self-start text-3xl">Qui-suis-je ?</h2>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-5 md:grid-rows-2 md:gap-[60px]">
          <div className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 flex justify-center items-center h-96 order-1 md:order-1">
            <Image
              className="w-full h-full object-cover"
              src={Photo1}
              alt="Photo1"
              width={250}
              height={400}
            />
          </div>
          <p className="font-poppins leading-[3rem] font-light flex items-center text-justify col-span-1 row-span-1 md:col-span-3 md:row-span-1 order-2 md:order-2">
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
          <span className="font-bodoni text-4xl flex items-center text-center md:text-right col-span-1 md:col-span-2 row-span-1 order-3 md:order-4">
            &quot;Suspendisse id pharetra leo, quis mollis lorem.&quot;
          </span>
          <p className="font-poppins leading-[3rem] font-light flex items-center text-justify col-span-1 row-span-1 md:col-span-3 md:row-span-1 md:col-start-1 md:row-start-2 order-4 md:order-3">
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
      </main>
    </>
  );
};

export default QuiSuisJe;
