import Link from "./link";
import CartIcon from "./cart-icon";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";

const pacifico = Pacifico({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

const Navbar = () => {
  const links = [
    { text: "Home" },
    { text: "Features" },
    { text: "Pricing" },
    { text: "Contact Us" },
  ];
  return (
    <header className="flex flex-row w-full justify-between items-center">
      <div className="flex">
        <span className={cn("font-bold text-xl", pacifico.className)}>SV SHOP</span>
        <nav className="flex ml-12 items-center">
          {links.map((link, i) => (
            <Link key={i} text={link.text} />
          ))}
        </nav>
      </div>
      <CartIcon width={40} height={40} className="mr-16" />
    </header>
  );
};

export default Navbar;
