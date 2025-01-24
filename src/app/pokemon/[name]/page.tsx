"use client";
import Loading from "@/components/Loading";
import useFetch from "@/hooks/useFetch";
import { Params, PokeOverview } from "@/types/type";
import { capitalize } from "@/utils/helper";
import Image from "next/image";
import { use } from "react";

// Detail Page
export default function Details({ params }: { params: Params }) {
  const { name } = use(params);
  const { data: pokemon } = useFetch<any>(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return (
    <>
      <h1 className="my-8">Pokemon Details</h1>
      {pokemon ? (
        <>
          <div className="flex justify-center sm:justify-start gap-8 flex-col sm:flex-row mb-8">
            <Image
              src={pokemon.sprites.other.home.front_default}
              alt={name}
              width={400}
              height={400}
            />
            <section>
              <h2 className="mb-4">{capitalize(name)}</h2>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <p>Types:</p>
                  <div className="flex gap-1">
                    {pokemon.types.map((item: any) => (
                      <p className="bg-slate-600 text-white py-1 px-2 rounded">
                        {capitalize(item.type.name)}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <p>Height: {pokemon.height}</p>
                  <p>Weight: {pokemon.weight}</p>
                </div>

                <div className="flex gap-2 items-center">
                  <p>Abilities:</p>
                  <div className="flex gap-1">
                    {pokemon.abilities.map((item: any) => (
                      <p className="bg-yellow-600 text-white py-1 px-2 rounded">
                        {capitalize(item.ability.name.split("-").join(" "))}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  {pokemon.stats.map((item: any) => (
                    <div className="flex gap-2">
                      <p>{item.stat.name}:</p>
                      <p>{item.base_stat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <p className="font-bold text-lg mb-2">{capitalize(name)} Moves</p>
          <div className="flex flex-wrap gap-1">
            {pokemon.moves.map((item: any) => (
              <p className="bg-slate-300 py-1 px-2 rounded">
                {capitalize(item.move.name.split("-").join(" "))}
              </p>
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
