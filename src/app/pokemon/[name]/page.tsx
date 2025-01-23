"use client";
import useFetch from "@/hooks/useFetch";
import { Params, PokeOverview } from "@/types/type";
import { capitalize } from "@/utils/helper";
import { use } from "react";

export default function Details({ params }: { params: Params }) {
  const { name } = use(params);
  return (
    <>
      <h1 className="my-8">Pokemon Details</h1>
      <p>{capitalize(name)}</p>
    </>
  );
}
