import Image from "next/image";

export default function Menu() {
  return (
    <div className="flex flex-col">
      <Banner text="Dinner" />
      <MenuImage
        src="/menu/food.jpeg"
        alt="Dinner"
        width={4200}
        height={2550}
      />
      <Banner text="Drinks" />
      <MenuImage
        src="/menu/drinks-front.png"
        alt="Drinks"
        width={8960}
        height={5440}
      />
      <Banner text="Wine" />
      <MenuImage
        src="/menu/drinks-back.png"
        alt="Drinks"
        width={8960}
        height={5440}
      />
      <Banner text="Brunch" />
      <MenuImage
        src="/menu/brunch-front.jpeg"
        alt="Brunch"
        width={8960}
        height={5440}
      />
      <MenuImage
        src="/menu/brunch-back.jpeg"
        alt="Brunch"
        width={8960}
        height={5440}
      />
    </div>
  );
}

function Banner({ text }: { text: string }) {
  return (
    <div className="text-dolores flex h-12 w-full items-center justify-center bg-gray-200 p-12 font-bold">
      <h1 className="text-4xl">{text}</h1>
    </div>
  );
}

function MenuImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="m-8 flex w-auto justify-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-3/4"
      />
    </div>
  );
}
