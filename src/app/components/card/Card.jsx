import Image from "next/image";
export default function Card(props){
    const {images,name} = props.character

    function selectCard(card){
        props.battle_action.add(props.character)
        card.classList.toggle("select")
    }
    
    return (
        <div className="cards w-full min-h-80 h-fit flex flex-col justify-end items-center bg-zinc-900 shadow-lg shadow-black/50 rounded-md cursor-pointer overflow-hidden" onClick={(e)=>{selectCard(e.currentTarget)}}>
            <Image loading="lazy" src={images.lg} width={300} height={0} alt={name}/>
            <p  className="w-full py-4 text-center bg-red-600 z-10">{name}</p>
        </div>
    )
}