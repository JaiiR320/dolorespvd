import Carousel from "@/components/carousel";

export default function Home() {
  const images = [
    "/images/molino.jpg",
    "/images/horz-mixer-front.jpg",
    "/images/bar.jpg",
  ];

  return (
    <div className="h-auto w-auto">
      <Carousel
        images={images}
        title="Dolores PVD"
        subtitle="100 Hope St. Providence RI"
      />
      <div className="mx-auto my-10 flex w-3/5 flex-col items-center justify-center gap-5">
        <h1 className="text-center text-2xl lg:text-4xl">
          <Bold>About Dolores</Bold>
        </h1>
        <hr className="border-dolores w-full" />
        <p className="text-center text-base lg:text-xl">
          <Bold>Dolores</Bold> is a restaurant located in the{" "}
          <Bold>Fox Point neighborhood</Bold> on the east side of
          Providence. Dolores features contemporary and regional Mexican
          cuisine from the <Bold>Mixteca</Bold> region of Puebla and
          Oaxaca, drawing inspiration from its many types of Moles, sauces
          and stews. The beverage program boasts it&apos;s strength in México&apos;s
          artisanal agave distillates, offering craft cocktails that are a
          compliment to the cuisine.
        </p>
      </div>
    </div>
  );
}

function Bold({ children }: { children: React.ReactNode }) {
  return <span className="text-dolores font-bold">{children}</span>;
}
