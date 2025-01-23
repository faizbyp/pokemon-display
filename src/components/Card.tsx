"use client";
import { capitalize } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: number;
  name: string;
}

const Card = ({ id, name }: CardProps) => {
  return (
    <Link
      href={`/pokemon/${name}`}
      className="border-2 rounded cursor-pointer py-2 px-4 hover:scale-110 active:bg-slate-200 transition-all"
    >
      <Image
        src={`https://img.pokemondb.net/artwork/${name}.jpg`}
        alt={name}
        width={100}
        height={100}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain",
        }}
      />
      <p className="text-center">{capitalize(name)}</p>
    </Link>
  );
};
export default Card;
