import {prisma} from "@/utils/db";
import {notFound} from "next/navigation";

const getPlayer = async (slug) => {
    const player = await prisma.players.findUnique({
        where: {
            slug
        }
    })
    if (!player) {
        return notFound()
    }

    return player
}

const PlayerPage = async ({ params }) => {
    const player = await getPlayer(params.slug)

    return(
      <main className="flex flex-col items-center justify-between p-24">
        <h1 className="text-3xl">scoutBasketball AI</h1>

        <h2 className="my-5">{player.name} {player.surname}</h2>
      </main>
    )
}

export default PlayerPage