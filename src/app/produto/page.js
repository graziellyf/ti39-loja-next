import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function produto(){
    useEffect( ()=> {
        alert("Página inválida")
        redirect("/")
    },[])
}
