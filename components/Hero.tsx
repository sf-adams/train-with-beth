import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";

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
      <div>
        <h1>Top Fashion for a top price</h1>
        <p>
          We sell only the most exclusive and high quality products for you. We
          are the best so come and shop with us.
        </p>
      </div>

      <div>
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
    </section>
  );
}
