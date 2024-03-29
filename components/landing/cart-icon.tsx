"use client";
import { cn } from "@/lib/utils";
import useCartStore from "@/stores/cart-store";

interface CartIconInterface {
  className: string;
  width: number;
  height: number;
}

const CartIcon = ({ className }: CartIconInterface) => {
  const { items } = useCartStore();

  return (
    <div
      className={cn(
        className,
        "bg-gradient-to-br relative from-[#9BA7F9] to-[#FC8CD6] p-2 rounded-xl flex justify-center items-center",
      )}
    >
      <span className="rounded-full font-bold text-white absolute bg-red-700 text-xs -top-1 -right-1 px-1">
        {items.length}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={20}
        height={20}
        viewBox="0 0 902.86 902.86"
        fill="#fff"
      >
        <path d="M671.504 577.829 781.989 145.22H902.86v-68H729.174L703.128 179.2 0 178.697l74.753 399.129h596.751v.003zm14.262-330.641-67.077 262.64h-487.49L81.928 246.756l603.838.432zM578.418 825.641c59.961 0 108.743-48.783 108.743-108.744s-48.782-108.742-108.743-108.742H168.717c-59.961 0-108.744 48.781-108.744 108.742s48.782 108.744 108.744 108.744S277.46 776.858 277.46 716.897c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107 12.59-7.928 26.342-7.928 40.742.001 59.961 48.783 108.744 108.744 108.744zM209.46 716.897c0 22.467-18.277 40.744-40.743 40.744s-40.744-18.277-40.744-40.744c0-22.465 18.277-40.742 40.744-40.742 22.466 0 40.743 18.277 40.743 40.742zm409.702 0c0 22.467-18.277 40.744-40.743 40.744s-40.743-18.277-40.743-40.744c0-22.465 18.277-40.742 40.743-40.742s40.743 18.277 40.743 40.742z" />
      </svg>
    </div>
  );
};

export default CartIcon;
