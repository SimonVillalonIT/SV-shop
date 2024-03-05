import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import { cn } from "@/lib/utils";
import SocialNetwork from "./social-network";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const bodoni = Bodoni_Moda({ style: ["italic"], subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="flex flex-1 flex-col relative mt-24">
      <div className="ml-64 flex flex-col justify-around">
        <span className="p-3 mb-8 bg-gradient-to-r from-purple to-rose w-fit rounded-2xl text-white font-semibold text-sm">
          2024 Collection
        </span>
        <h1
          className={cn("text-4xl font-bold w-[350px] mb-8", bodoni.className)}
        >
          You should always feel pretty
        </h1>
        <p className="font-normal text-lg mb-8">
          Clothes are sure to heat up your winter
        </p>
        <Link href="/catalog" className="p-4 bg-gradient-to-r from-purple to-rose  w-fit rounded-2xl text-white font-semibold text-sm">
          Go to shop
        </Link>
      </div>
      <div className="flex absolute left-80 w-48 bottom-8 justify-between">
        <SocialNetwork icon={TwitterLogoIcon} />
        <SocialNetwork icon={InstagramLogoIcon} />
      </div>
      <Image
        src="/girl.png"
        className="absolute right-64 bottom-0"
        alt="women sv-shop winter-outfit"
        width={300}
        height={400}
      />
    </section>
  );
};

export default Hero;
