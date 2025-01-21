'use client';
import Image from 'next/image';
import Photo1 from '../public/stock/photo1.jpg';
import Photo2 from '../public/stock/photo2.jpg';
import Photo3 from '../public/stock/photo3.jpg';
import Photo4 from '../public/stock/photo4.jpg';
import Photo5 from '../public/stock/photo5.jpg';
import Photo6 from '../public/stock/photo1.jpg';
import FranceFlag from '../public/flag-france.webp';
import { Carousel } from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { Bodoni_Moda } from 'next/font/google';
import Button from '@/components/Button';

const bodoniModa = Bodoni_Moda({ weight: '400', subsets: ['latin'] });

const Home = () => {
  return (
    <>
      <section>
        <div className="relative">
          <div className="absolute inset-0 bottom-[100px] w-full text-white z-[9999] flex flex-col items-center justify-end top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-5xl">Domikréa</h1>
            <p className="text-2xl font-extralight">
              Créations et décorations fait-main
            </p>
          </div>
          <Carousel
            autoplay={true}
            autoplayInterval={5000}
            speed={750}
            wrapAround={true}
            renderCenterLeftControls={({ previousSlide }) => (
              <button onClick={previousSlide}>
                <FontAwesomeIcon
                  className="text-white text-3xl px-8"
                  icon={faCircleChevronLeft}
                />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button onClick={nextSlide}>
                <FontAwesomeIcon
                  className="text-white text-3xl px-8"
                  icon={faCircleChevronRight}
                />
              </button>
            )}
          >
            <div className="relative">
              <div className="absolute inset-0 w-screen bg-black bg-opacity-30"></div>
              <Image
                className="w-screen h-screen object-cover"
                src={Photo1}
                alt="Photo1"
                width="400"
                height="250"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0 w-screen bg-black bg-opacity-30"></div>
              <Image
                // className="w-screen h-screen object-cover"
                className="w-screen h-screen object-cover"
                src={Photo2}
                alt="Photo2"
                width="400"
                height="250"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0 w-screen bg-black bg-opacity-30"></div>
              <Image
                // className="w-screen h-screen object-cover"
                className="w-screen h-screen object-cover"
                src={Photo3}
                alt="Photo3"
                width="400"
                height="250"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0 w-screen h-screen bg-black bg-opacity-30"></div>
              <Image
                // className="w-screen h-screen object-cover"
                className="w-screen h-screen object-cover"
                src={Photo4}
                alt="Photo4"
                width="400"
                height="250"
              />
            </div>
          </Carousel>
        </div>
      </section>
      <main className="flex flex-col items-center justify-center w-full p-[100px] pt-[100px] pb-[200px] gap-20">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-3xl">Bienvenue !</span>
          <p className="leading-[3rem] font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            magna non sem tristique volutpat. Pellentesque venenatis orci eu
            nulla molestie, sit amet aliquet urna varius. Suspendisse id
            pharetra leo, quis mollis lorem.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 ">
          <h2 className="self-start text-2xl">Les produits</h2>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-8 w-full md:grid-cols-3 md:auto-rows-[2">
            <Image
              className="w-full h-[200px] object-cover"
              src={Photo1}
              alt="Photo1"
              width="200"
              height="100"
            />
            <Image
              className="w-full h-[200px] object-cover"
              src={Photo2}
              alt="Photo2"
              width="200"
              height="100"
            />
            <Image
              className="w-full h-[200px] object-cover"
              src={Photo3}
              alt="Photo3"
              width="200"
              height="100"
            />
            <Image
              className="w-full h-[200px] object-cover"
              src={Photo4}
              alt="Photo4"
              width="200"
              height="100"
            />
            <Image
              className="w-full h-[200px] object-cover"
              src={Photo5}
              alt="Photo5"
              width="200"
              height="100"
            />
            <Image
              className="w-full h-[200px] object-cover"
              src={Photo6}
              alt="Photo6"
              width="200"
              height="100"
            />
          </div>
          <Button element="anchor" text="Tous les produits" href="/produits" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center text-center gap-8">
              <Image
                src={FranceFlag}
                alt="Drapeau français"
                width="100"
                height="65"
              />
              <figcaption className="text-base">Fabriqué en France</figcaption>
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              magna non sem tristique volutpat. Pellentesque venenatis orci eu
              nulla molestie, sit amet aliquet urna varius. Suspendisse id
              pharetra leo, quis mollis lorem.
            </p>
          </div>
          <Button element="anchor" text="Mon atelier" href="/mon-atelier" />
        </div>
      </main>
    </>
  );
};

export default Home;
