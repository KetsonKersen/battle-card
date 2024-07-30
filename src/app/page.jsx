'use client'
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "./context/GlobalContext"
import Image from "next/image"
import Modal from "./components/modal/Modal"
import Grid from "./components/grid/Grid"
import Loading from "./components/grid/loading"
import empty from "./assets/empty.png"

export default function Home() { 
  const {stateData, battle_Cards, count} = useContext(GlobalContext)

  //COUNT CARDS
  const [numCards,setNumcards] = useState(0)
  useEffect(()=>{
    const cards = document.querySelectorAll(".cards")
    setNumcards(cards.length)
  })

  return(
    <main id="main" className="text-white pt-20">
      <div className="w-full max-w-6xl m-auto">

        <div id="count-cards" className="flex justify-between items-center my-5 text-zinc-300">
          <p>Selecione duas cartas para o combate...</p>
          <p>Total de cartas encontradas: {numCards}</p>
        </div>
    
        {stateData?.length ? <Grid/> : <Loading/>}
        {stateData?.length &&  numCards === 0 && 
          <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 opacity-30 invert">
            <Image src={empty} width={400} height={0} alt=""/>
          </div>
        }
      
        <div className="w-12 h-12 flex items-center justify-center text-center fixed bottom-14 right-10 bg-white text-red-600 rounded-full py-2 px-4 shadow-lg shadow-black/80 z-50" >
          <p><span>{count}</span>/2</p>
        </div>

      </div>
      {battle_Cards.length > 1 && <Modal/>}
    </main>
  )
}

