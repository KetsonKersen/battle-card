export default function Loading(){
    let arr = []
    for(let i = 0; i <= 20; i ++){
        arr.push(<div className="cardLoading w-full h-80 flex flex-col justify-end items-center bg-zinc-700 rounded-md cursor-pointer overflow-hidden"></div>)
    }

    return(
        <section id="grid" className="grid grid-cols-5 gap-4">
            {arr.map(( cardLoading )=>{ return cardLoading })}
        </section>
    )
}