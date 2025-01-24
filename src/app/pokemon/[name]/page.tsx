"use client";
import Loading from "@/components/Loading";
import useFetch from "@/hooks/useFetch";
import useUserStore from "@/hooks/useUserStore";
import { Params } from "@/types/type";
import { capitalize } from "@/utils/helper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";

// Detail Page
export default function Details({ params }: { params: Params }) {
  const router = useRouter();
  const { name } = use(params);
  const username = useUserStore((state) => state.username);
  const logout = useUserStore((state) => state.logout);
  const { data: pokemon } = useFetch<any>(`https://pokeapi.co/api/v2/pokemon/${name}`);

  useEffect(() => {
    const userStorage = localStorage.getItem("user-storage");
    if (!userStorage) {
      router.replace("/login");
    }
  }, [router, username]);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="my-8">Pokemon Details</h1>
        <div className="flex gap-4 items-center">
          <p>{username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
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
                    {pokemon.types.map((item: any, index: number) => (
                      <p key={index} className="bg-slate-600 text-white py-1 px-2 rounded">
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
                    {pokemon.abilities.map((item: any, index: number) => (
                      <p key={index} className="bg-yellow-600 text-white py-1 px-2 rounded">
                        {capitalize(item.ability.name.split("-").join(" "))}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-bold text-lg">Base Stats</p>
                  {pokemon.stats.map((item: any, index: number) => (
                    <div key={index} className="flex gap-2">
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
            {pokemon.moves.map((item: any, index: number) => (
              <p key={index} className="bg-slate-300 py-1 px-2 rounded">
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
