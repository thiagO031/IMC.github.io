import React, { useState } from 'react'
import './style/Main.sass'

const Main = () => {

    const[nome, setNome] = useState()
    const[altura, setAltura] = useState()
    const[peso, setPeso] = useState()

    const imcNome = (e) => {
        setNome(e.target.value)
    }

    const imcAltura = (e) =>{
        setAltura(e.target.value)
    }

    const imcPeso = (e)=>{
        setPeso(e.target.value)
    }

    return (
        <main className='main'>
            <div className="main-container">
                <h2>IMC 2022</h2>

                <form>
                    <label>
                        <input type="text" value={nome} onChange={imcNome} placeholder='Nome'/>
                        <input type="number" value={altura} onChange={imcAltura} placeholder='Altura' />
                        <input type="number" value={peso} onChange={imcPeso} placeholder='Peso' />
                    </label>
                </form>

                <div className="res">
                    <h1>{nome}, o seu IMC é: <span>{(peso / (altura * altura)).toFixed(1)}</span></h1>
                </div>
            </div>
        </main>
    )
}

export default Main