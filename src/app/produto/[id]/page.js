'use client'
import { busca } from "@/app/model/produtos";
import Produto from "@/componentes/Produto";
import { useEffect, useState } from "react"

export default function produtoID( props ){

    const id = props.params.id
    
    const [quantidade, alteraquantidade ] = useState (1);
    const [ produto, alteraproduto ] = useState( null );

    function addCarrinho(){

        let carrinho = localStorage.getItem("carrinho");
        carrinho = JSON.parse( carrinho );

        let objeto = { id: id, quantidade: quantidade }

        carrinho.push( objeto );
        carrinho = JSON.stringify( carrinho )

        //objeto = JSON.stringify( objeto )

        localStorage.setItem("carrinho", carrinho )
    }

    useEffect( ()=> {
       async function data(){
         const resposta = await busca( id );

            if ( resposta.status == 200){
                alteraproduto( resposta.data[0] )
            }

         alteraproduto( resposta.data[0] )
       }
        data();
    }, [] );

    return(
        <div>

            {
                produto == null ? <p> Produto não encontrado... </p> :
                <div className="w-1/4 m-auto">
                  
                    <Produto produto={produto} descricao={true} largura={350} />

                <br/>
                <label>
                    Quantidade:
                    <input type="number" onChange={ (e)=>alteraquantidade(e.target.value)} />
                </label>

                <button onClick={ ()=> addCarrinho() }> Adicionar ao carrinho </button>

                </div>
            }

          
        </div>
    )
}