"use client";
import useFetch from "@/hooks/useFetch";
import { PokeOverview } from "@/types/pokemon";

export default function Home() {
  const { data: pokemon } = useFetch<any>("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");

  return (
    <>
      <h1 className="my-8">Pokemon Display</h1>
      <section className="flex flex-wrap gap-x-12 gap-y-8">
        {pokemon &&
          pokemon.results.map((poke: PokeOverview) => {
            const id = poke.url.split("/").filter(Boolean).pop();
            return <p key={id}>{poke.name}</p>;
          })}
      </section>
    </>
  );
}
