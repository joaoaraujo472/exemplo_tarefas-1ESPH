import {useState, useEffect} from 'react'

const Tarefas = () => {

    // Hooj - useState - Manipula o estado da varável
    const [tarefas,setTarefas]=useState(()=>{
        const salvarTarefas = localStorage.getItem("item-tarefa");
        return salvarTarefas ? JSON.parse(salvarTarefas) : [];
    });

    const[campo,setcampo]=useState("");
    //  Hook - useEffect - realiz ao efeito colateral, nesse exemplo vai mostrar a tarefa adicionada em tempo real
    useEffect(()=>{
        localStorage.setItem("i.tem-tarefa", JSON.stringify(tarefas))
    }, [tarefas])

  return (
    <>
      
    </>
  )
}

export default Tarefas
