import Image from "next/image";
import heroImage from "@/public/stock/photo4.jpg";

export default function Home() {
  return (
    <>
      <section>
        <Image
          src={heroImage}
          alt="Productos de costura"
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
          }}
        />
      </section>
      <main className="flex flex-col align-middle justify-center gap-20 pt-24 pr-[300] pb-48 pl-24">
        <div className="flex flex-col justify-center align-middle text-center">
          <span className="text-5xl font-bodoni">Bienvenue !</span>
          <p className="font-poppins leading-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            magna non sem tristique volutpat. Pellentesque venenatis orci eu
            nulla molestie, sit amet aliquet urna varius. Suspendisse id
            pharetra leo, quis mollis lorem.
          </p>
        </div>
      </main>
    </>
  );
}
