'use client'

import {useState} from "react";

const SearchPlayer = () => {
  const [playerName, setPlayerName] = useState('')
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    console.log('submit')
    console.log(playerName)

    await new Promise(r => setTimeout(r, 2000));

    setLoading(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Player"
          onChange={(e) => setPlayerName(e.target.value)}
          value={playerName}
          className="rounded-full h-18 py-0 pl-8 border-2 m-8"
        />
      </form>
      { loading && <div className="text-center">Loading...</div> }
    </div>
  )
}

export default SearchPlayer