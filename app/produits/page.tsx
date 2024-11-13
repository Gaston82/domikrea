import Head from "next/head";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import Photo1 from "../../public/stock/photo1.jpg";
import Photo2 from "../../public/stock/photo2.jpg";
import Photo3 from "../../public/stock/photo3.jpg";
import Photo4 from "../../public/stock/photo4.jpg";
import Photo5 from "../../public/stock/photo5.jpg";
import Photo6 from "../../public/stock/photo6.jpg";
import Photo7 from "../../public/stock/photo7.jpg";
import Photo8 from "../../public/stock/photo8.jpg";
import Photo9 from "../../public/stock/photo9.jpg";
import Category from "@/components/Category";

const bodoniModa = Bodoni_Moda({ weight: "400", subsets: ["latin"] });

const Produits = () => {
  const categories = [
    { id: "nuages", name: "Nuages", url: Photo1.src },
    { id: "etoiles", name: "Étoiles", url: Photo2.src },
    { id: "lunes", name: "Lunes", url: Photo3.src },
    { id: "poules", name: "Poules", url: Photo4.src },
    { id: "fanions", name: "Fanions", url: Photo5.src },
    { id: "guirlandes", name: "Guirlandes", url: Photo6.src },
    { id: "bananes", name: "Bananes", url: Photo7.src },
    { id: "pochettes-portables", name: "Pochettes portables", url: Photo8.src },
    { id: "trousses", name: "Trousses", url: Photo9.src },
  ];

  return (
    <>
      <Head>
        <title>Domikréa - Produits</title>
        <meta name="description" content="TODO: Domikrea description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full p-10 gap-20">
        <h2 className={`${bodoniModa.className} self-start text-3xl`}>
          Créations
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-5">
          {categories.map(({ id, name, url }) => (
            <li key={id}>
              <Link href={`/produits/${id}`}>
                <Category text={name} url={url} />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Produits;
