import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

type Props = {};

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero({}: Props) {
  const data = await getData();

  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            HAPPY. HEALTHY. STRONG
          </h1>
          <p>
            I am committed to helping you become happier, healthier and
            stronger. Sounds good? Let&apos;s go!
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div>
            <Image
              src={urlFor(data.image1).url()}
              alt="Cover Photo"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              src={urlFor(data.image2).url()}
              alt="Cover Photo"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
