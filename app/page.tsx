import SearchPlayer from "@/components/SearchPlayer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-3xl">scoutBasketball AI</h1>

      <SearchPlayer />
    </main>
  )
}
