import {useState} from 'react'

const Contador = () => {
    // HOOK - useState- Manipula o estado da variável   
  const[contador, setContador]=useState(+10000);
    return (
    <>
      <h1>Aura Farmada:{contador}</h1>
      <button onClick={()=>setContador(contador +1)}>Aumentar</button>
      <button onClick={()=>setContador(contador -1)}>Diminuir</button>
    </>
  )
}

export default Contador
