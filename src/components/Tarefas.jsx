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
    <div className="max-w-md mx-auto mt-10 bg-indigo-500 rounded-2xl shadow shadow-red-600 border-amber-500">
      <h1 className='text-2xl font-bold text-white mb-6 text-center'>Minha Lista de Tarefas</h1>
      <form onSubmit={Adicionartarefa} className='flex gap-2 mb-6'>
        <input
          type="text"
          value={campo}
          onChange={(e)=>setcampo(e.target.value)}
          placeholder='Digite sua Tarefa'
          className="flex-1 px-4 py-2 border-gray-700 rounded 2xl focus:outline-none focus:ring-1 focus:ring-amber-200 focus:border-transparent text-black placeholder:text-gray-700"
        />
        <button type='submit'
          className='bg-indigo-950 hover:bg-indigo-400 text-white font-medium px-5 rounded-2xl trasition-colors cursor-pointer'
        >Adicionar</button>
      </form>

      <ul className='space-y-3'>
        {tarefas.map((tarefa)=>(
          <li key={tarefa.id} className='flex intems-center justify-between p-3 bg-indigo-900 border border-amber-300 rounded-2xl shadow-sm hover:bg-indigo-500 trasition-colors text-white'>
            <span>{tarefa.texto}</span>
            <button onClick={() => RemoverTarefas(tarefa.id)} className='bg-red-950 hover:bg-indigo-400 text-white font-medium px-5 rounded-2xl trasition-colors cursor-pointer'>Excluir</button>
          </li>
        ))}
      </ul>
      {tarefas.length === 0 && <p className='text-center italic mt-4 text-white'>Nenhuma tarefa salva</p>}
    </div>
  )
}

export default Tarefas
