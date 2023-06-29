
import Link from 'next/link'

export default function Menu(){
    return(
        <div>
            <h1 className="bg-indigo-400 text-white justify-center flex p-2"> Grazielly Store </h1>
            <nav className="bg-indigo-300 text-white p-3 text-base">
                <ul className="flex gap-10 justify-center">
                    <li className="border border sky-500 p-2 hover:bg-sky-500 transition-all "> <Link href="/"> Inicio  </Link> </li>
                    <li className="border border sky-500 p-2 hover:bg-sky-500 transition-all " > <Link href="/carrinho"> Carrinho </Link> </li>
                    <li className="border border sky-500 p-2 hover:bg-sky-500 transition-all " > <Link href="/cadastro">  Cadastro </Link> </li>
                    <li className="border border sky-500 p-2 hover:bg-sky-500 transition-all "> <Link href="/login">  Login </Link> </li>
                </ul>
            </nav>
        </div>
    )
}
 