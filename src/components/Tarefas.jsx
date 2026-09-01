import {useState, useEffect} from 'react'
import '../css/estilo.css'

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

    const Adicionartarefa =(e)=>{
      //  Previne que a pagina se recarregue automaticamente
      e.preventDefault();
      // Valida se o campo estiver vazio
      if(!campo.trim()) return;

      // Novo objeto 
      const novaTarefa={
        id: Date.now(),
        texto: campo,
      }
      setTarefas([...tarefas,novaTarefa]);
      setcampo('');
    }

    const RemoverTarefas=(id)=>{
      //  Verifica se o D da tarefa atual é diferente do id que deseja apagar
      // Se o ID for igual(tarefa que deseja apagar) a condição retorna falso
      // e o item é excluido
      const apagarTarefa = tarefas.filter((tarefa)=> tarefa.id !== id)
      setTarefas(apagarTarefa);
    }

  return (
    <div className='todo-container'>
      <h1>Minha Lista de Tarefas</h1>
      <form onSubmit={Adicionartarefa}>
        <input
          type="text"
          value={campo}
          onChange={(e)=>setcampo(e.target.value)}
          placeholder='Digite sua Tarefa'
          className="todo-input"
        />
        <button type='submit'>Adicionar</button>
      </form>

      <ul>
        {tarefas.map((tarefa)=>(
          <li key={tarefa.id}>
            <span>{tarefa.texto}</span>
            <button onClick={()=>RemoverTarefas(tarefa.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      {tarefas.length === 0 && <p>Nenhuma tarefa salva</p>}
    </div>
  )
}

export default Tarefas
