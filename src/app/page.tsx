"use client";
import Card from "@/components/Card";
import Loading from "@/components/Loading";
import useFetch from "@/hooks/useFetch";
import useUserStore from "@/hooks/useUserStore";
import { PokeOverview } from "@/types/type";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// CardList Page
export default function Home() {
  const router = useRouter();
  const username = useUserStore((state) => state.username);
  const logout = useUserStore((state) => state.logout);
  const { data: pokemon } = useFetch<any>("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");

  useEffect(() => {
    const userStorage = localStorage.getItem("user-storage");
    if (!userStorage) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="my-8">Pokemon Display</h1>
        <div className="flex gap-4 items-center">
          <p>{username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
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
