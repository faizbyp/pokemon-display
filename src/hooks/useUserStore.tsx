"use client";
import { User } from "@/types/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create<User>()(
  persist(
    (set, get) => ({
      username: "",
      password: "",

      setCredentials: (username: string, password: string) => {
        set({ username: username, password: password });
      },
    }),

    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
