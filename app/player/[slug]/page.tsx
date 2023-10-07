import {notFound} from "next/navigation";
import prisma from "@/utils/db";
import {Player} from "@prisma/client";

const getPlayer = async (slug: string): Promise<Player> => {
  const player = await prisma.player.findUnique({
    where: {
      slug
    }
  })
  if (!player) {
    return notFound()
  }

  return player
}

const PlayerPage = async ({params}) => {
  const player = await getPlayer(params.slug)

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl">scoutBasketball AI</h1>

      <h2 className="my-5 text-2xl">{player.name} {player.surname}</h2>
    </main>
  )
}

export default PlayerPage
