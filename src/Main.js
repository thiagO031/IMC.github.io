import React, { useState } from 'react'

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
            <header className="header">
                <h2>IMC 2022</h2>

                <form>
                    <label>
                        <input id='nome' type="text" value={nome} onChange={imcNome} placeholder='Nome'/>
                        <input type="number" value={altura} onChange={imcAltura} placeholder='Altura' />
                        <input type="number" value={peso} onChange={imcPeso} placeholder='Peso' />
                    </label>
                </form>

                <div className="res">
                    <h1>{nome}, o seu IMC é {peso / (altura * altura)}</h1>
                </div>
            </header>
        </main>
    )
}

export default Main