import { GlobalContext } from "@/app/context/GlobalContext"
import { useContext, useEffect } from "react"
import { FaSearch } from "react-icons/fa";

export default function Header(){
    const {search,setSearch,setFilter} = useContext(GlobalContext)

    //SET CLICK
    useEffect(()=>{
        const btns = document.querySelectorAll("header ul li")
        btns.forEach((btn)=>{
            btn.addEventListener("click",()=>{
                btns.forEach((element)=> element.classList.remove("selected"))
                btn.classList.add("selected")
            })
        })
    },[])
    
    return(
        <header id="header" className="w-full h-20 bg-zinc-950 fixed top-0 z-50 text-white">
            <div className="w-full h-full max-w-6xl m-auto flex justify-between items-center">

                <h1 className="text-3xl">Battle Cards</h1>

                <ul className="flex gap-4">
                    <li onClick={()=>setFilter("")}className="cursor-pointer selected">Todos</li>
                    <li onClick={()=>setFilter("good")} className="cursor-pointer">Herois</li>
                    <li onClick={()=>setFilter("bad")} className="cursor-pointer">Vilões</li>
                </ul>

                <label className="pl-6 py-2 flex pr-14 bg-zinc-700 rounded-full relative">
                    <input className="bg-transparent" type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <span className="w-12 h-full flex items-center justify-center pr-6 absolute top-0 right-0"> <FaSearch size={16}/> </span>
                </label>

            </div>
        </header>
    )
}