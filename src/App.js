import { useEffect, useState } from "react"
import './App.css';
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";

function App() {

  const [index, setIndex] = useState(0)
  const [atividades, setAtividades] = useState([])
  const [atividade, setAtividade] = useState({id: 0})//id recebe 0 inicialmente para nao dar erros

  useEffect(() => {
    atividades.length <=0 ? setIndex(1) : setIndex(Math.max.apply(Math, atividades.map((item) => item.id)) + 1)
  },[atividades])

  function addAtividade(atividade){
    setAtividades([...atividades, {...atividade, id: index }]); //copia o array para dentro de um novo array
  }

  function deletarAtividade(id){
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id)
    setAtividades([...atividadesFiltradas])
  }

  function pegarAtividade(id){
    const atividade = atividades.filter(atividade => atividade.id === id);
    setAtividade(atividade[0])

  }

  function atualizarAtividade(atividade){
    setAtividades(atividades.map(item => item.id === atividade.id ? atividade : item))
    //faz uma verificacao em cada atividade baseada no id, ve qual é que esta sendo usada
    setAtividade({id: 0})
  }

  function cancelarAtividade(){
    setAtividades({id: 0})
  }
 
  return (
    <>
      <AtividadeForm 
        cancelarAtividade={cancelarAtividade}
        atividades={atividades}
        atividadeSelecionada={atividade}
        addAtividade={addAtividade}
        atualizarAtividade={atualizarAtividade}/>
      <AtividadeLista 
      atividades={atividades}
      deletarAtividade={deletarAtividade}
      pegarAtividade={pegarAtividade}/>
    </>
  );
}

export default App;
