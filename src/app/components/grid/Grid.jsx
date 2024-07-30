import Card from "../../components/card/Card"
import { useContext} from "react"
import { GlobalContext } from "../../context/GlobalContext"

export default function Grid(){
    const {stateData, battle_action, search,filter} = useContext(GlobalContext)
 
    return(
        <section id="grid" className="grid grid-cols-5 gap-4">
            {
            stateData?.map((character)=>{
                if((character.name.toUpperCase().indexOf(search.toUpperCase()) >= 0 ? true : false || (search === "")) && (character.biography.alignment === filter || filter === "")){
                    return <Card key={character.key} character={character} battle_action={battle_action}/>
                }
            })
            }
        </section>
    )
}