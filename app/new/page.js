// app/new/page.js

"use client";

import Preloader from "@/app/components/Preloader/Preloader";
import CardsListSection from "@/app/components/CardsListSection/CardsListSection";

import { useGetDataByCategory } from "@/app/api/api-hooks";
import endpoints from "@/app/api/config";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "new");

  return (
    <main className="main-inner">
      {newGames ? (
        <CardsListSection data={newGames} id="new" title="Новинки" />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
