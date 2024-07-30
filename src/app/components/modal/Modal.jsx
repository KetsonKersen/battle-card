import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "@/app/context/GlobalContext"
import { IoClose } from "react-icons/io5";

export default function Modal(){
    const {battle_Cards, battle_action} = useContext(GlobalContext)
    
    //CARDS
    const Card_1 = battle_Cards[0]
    let Card_1_points = 0
    
    let Card_2_points = 0
    const Card_2 = battle_Cards[1]
    
    //SET WINNER NAME
    const [winner,setWinner] = useState("")
    useEffect(()=>{
        if(Card_1_points > Card_2_points){
            setWinner(Card_1.name)
        }else{
            setWinner(Card_2.name)
        }
    })

    //SET STATUS
    function powerstats(){
        const powerstats = Object.keys(Card_1.powerstats)
        const arrCard1 = Object.values(Card_1.powerstats)
        const arrCard2 = Object.values(Card_2.powerstats)
    
        return(
            powerstats.map((item,index)=>{
                function fight(Player){
                    if(arrCard1[index] == arrCard2 [index]){
                        return "text-white"

                    }else{
                        //GET MAX VALUE
                        let win = Math.max(arrCard1[index], arrCard2 [index])

                        //CARD 1
                        if(Player === "Card_1"){
                            if(win == arrCard1[index]){
                                Card_1_points ++
                                return "text-green-500"
                            }else{
                                return "text-red-500"
                            }
                        }

                        //CARD 2
                        if(Player === "Card_2"){
                            if(win == arrCard2 [index]){
                                Card_2_points ++
                                return "text-green-500"
                            }else{
                                return "text-red-500"
                            }
                        }
                    }
                }
                
                return(
                    <p className="w-full flex justify-between px-4 py-1 border-b-2 border-zinc-100/10" key={index}><span className={`${fight("Card_1")}`}>{arrCard1[index]}</span>{item}<span className={`${fight("Card_2")}`}>{arrCard2 [index]}</span></p>
                )
            })
        )
    }

    return(
        <div id="modal" className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-zinc-950/90 z-50">
          <div className="w-fit h-fit bg-zinc-900 border-2 border-zinc-800 rounded-md relative p-4 py-6">

            <button className="w-8 h-8 flex items-center justify-center bg-red-600 absolute -top-4 -right-4 rounded-lg" onClick={()=>battle_action.clear()}><IoClose size={20}/></button>
            
            <h3 className="w-full text-center text-4xl mb-4 pb-4 font-bold text-green-400 border-b-2 border-zinc-100/10">Vencedor {winner}</h3> 
        
            <div id="content-modal" className="w-full h-full flex items-center justify-between">

                {/* CARD 1 */}
                <div className="w-60 flex flex-col items-center relative overflow-hidden rounded-lg">
                    <Image className="w-full h-auto" loading="lazy" src={Card_1.images.lg} width={300} height={0} alt={Card_1.name}/>
                    <p className="w-full text-center text-white text-2xl py-1 absolute bottom-0 bg-red-600">{Card_1.name}</p>
                </div>
                
                {/* STATUS */}
                <div className="w-96 h-full flex flex-col items-center justify-center px-10 ">
                    <div className="w-full flex flex-col gap-2">
                        {powerstats()}
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="w-60 flex flex-col items-center relative overflow-hidden rounded-lg">
                    <Image className="w-full h-auto" loading="lazy" src={Card_2.images.lg} width={300} height={0} alt={Card_2.name}/>
                    <p className="w-full text-center text-white text-2xl py-1 absolute bottom-0 bg-red-500">{Card_2.name}</p>
                </div>

            </div>

          </div>
        </div> 
    )
}