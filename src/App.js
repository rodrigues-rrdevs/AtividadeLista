import { useState } from "react"
import './App.css';

let initialState = [
  { 
    "id" : 1,
    "prioridade" : "1",
    "titulo" : "Primeira",
    "descricao" : "Primeira"
    },
    {
      "id" : 2,
      "prioridade" : "2",
      "titulo" : "Segunda",
      "descricao" : "Segunda"
    },
]

function App() {

  const [atividades, setAtividades] = useState(initialState)

  function addAtividade(e){
    e.preventDefault();
    const atividade = {
       id : document.getElementById('id').value,
       prioridade : document.getElementById('prioridade').value,
       titulo : document.getElementById('titulo').value,
       descricao : document.getElementById('descricao').value,
    }
    atividades.push(atividade);
    setAtividades([...atividades,]); //copia o array para dentro de um novo array
  }


  function prioridadeLabel(param){
      
    switch(param){
        case '1':
          return 'Baixa'
        case '2':
          return 'Média'
        case '3':
          return 'Alta'
      }
  }
  function prioridadeStyle(param,icon){
      
    switch(param){
        case '1':
          return icon ? 'smile' : 'success'
        case '2':
          return icon ? 'meh' : 'dark'
        case '3':
          return icon ? 'frown' : 'danger'
      }
  }
 
  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Id</label>
          <input type="text" className="form-control" id="id" value={Math.max.apply(Math, atividades.map((item) => item.id)) + 1} readonly></input>
        </div>
        <div class="col-md-6">
            <label class="form-label">Prioridade</label>
            <select id="prioridade" class="form-select">
              <option defaultValue="0">Selecionar...</option>
              <option value="1">Baixa</option>
              <option value="2">Média</option>
              <option value="3">Alta</option>
            </select>
          </div>
        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input type="text" className="form-control" id="titulo">
          </input>
        </div>
        <div className="col-md-6">
          <label className="form-label">Descrição</label>
          <input type="text" className="form-control" id="descricao">
          </input>
        </div>
        <hr/>
        <div className="col-12">
        <button type="button" className="btn btn-secondary" onClick={addAtividade}> + Atividade </button> 
        </div>
      </form>
      <div className="mt-3">
        {atividades.map( ativ => ( 
          <div key ={ativ.id} className={"card mb-2 shadow-sm border-"+ prioridadeStyle(ativ.prioridade)}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title"><span className="badge bg-secondary me-2">{ativ.id}</span> 
                - {ativ.titulo}</h5>
                <h6>Prioridade: <span className={"ns-1 text-"+ prioridadeStyle(ativ.prioridade)}>
                  <i className={"me-1 far fa-"+prioridadeStyle(ativ.prioridade, true)}></i>
                  </span> {prioridadeLabel(ativ.prioridade)}</h6>
              </div>
              <p className="card-text">{ativ.descricao}</p>                                                                                                                                                    
              <div className="d-flex justify-content-end pt-2 m-0 border-top"> 
              <button className="btn btn-sn btn-outline-primary me-2"><i className="fas fa-pen me-2"></i>Editar</button>
              <button className=" btn btn-sn btn-outline-danger me-2"><i className="fas fa-trash me-2"></i>Deletar</button>        
              </div>
            </div>
          </div>
        ))}  
      </div>
    </>
  );
}

export default App;
