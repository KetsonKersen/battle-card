import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()
export const GlobalProvider = ({children})=>{
    //DATA
    const [stateData,setStateData] = useState([])

    //COUNTS
    const [count,setCount] = useState(0)
    const [TotalCards,setTotalCards] = useState(0)

    //SEARCH AND FILTER
    const [search,setSearch] = useState("")
    const [filter,setFilter] = useState("")
    
    //CARDS
    const [battle_Cards,setBattle_Cards] = useState([])
    const battle_action = {
        add: (character)=>{
            const index = battle_Cards.indexOf(character)
            if(index < 0){
                setCount(count + 1)
                battle_Cards.push(character)
            }else{
                alert("Selecione uma carta diferente para o combate!")
            }
        },
        clear: ()=>{
            setBattle_Cards([])
            setCount(0)
            setSearch("")
            
            //REMOVE SELECTED CARD
            const cards = document.querySelectorAll(".cards")
            cards.forEach((card)=>{
                card.classList.remove("select")
            })
        }
    }

    useEffect(()=>{
        fetch("https://homologacao3.azapfy.com.br/api/ps/metahumans")
        .then(async (response)=>{
          const data = await response.json()
          setStateData(data)
        })
    },[])
   
    return (
        <GlobalContext.Provider value={{stateData,battle_Cards,battle_action,count,search,setSearch,TotalCards,filter,setFilter}}>{children}</GlobalContext.Provider>
    )
}