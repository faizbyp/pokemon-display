"use client";
import Card from "@/components/Card";
import Loading from "@/components/Loading";
import useFetch from "@/hooks/useFetch";
import { PokeOverview } from "@/types/type";

// CardList Page
export default function Home() {
  const { data: pokemon } = useFetch<any>("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");

  return (
    <>
      <h1 className="my-8">Pokemon Display</h1>
      <section className="flex flex-wrap justify-center gap-8">
        {pokemon ? (
          pokemon.results.map((poke: PokeOverview) => {
            const id = Number(poke.url.split("/").filter(Boolean).pop());
            return <Card key={id} id={id} name={poke.name} />;
          })
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
}
