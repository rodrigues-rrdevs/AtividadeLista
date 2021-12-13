import React from 'react'

export default function Atividade(props) {
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
        <div className={"card mb-2 shadow-sm border-"+ prioridadeStyle(props.ativ.prioridade)}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title"><span className="badge bg-secondary me-2">{props.ativ.id}</span> 
                - {props.ativ.titulo}</h5>
                <h6>Prioridade: <span className={"ns-1 text-"+ prioridadeStyle(props.ativ.prioridade)}>
                  <i className={"me-1 far fa-"+prioridadeStyle(props.ativ.prioridade, true)}></i>
                  </span> {prioridadeLabel(props.ativ.prioridade)}</h6>
              </div>
              <p className="card-text">{props.ativ.descricao}</p>                                                                                          <div className="d-flex justify-content-end pt-2 m-0 border-top"> 
              <button className="btn btn-sn btn-outline-primary me-2" onClick={() => props.pegarAtividade(props.ativ.id)}><i className="fas fa-pen me-2"></i>Editar</button>
              <button className=" btn btn-sn btn-outline-danger me-2" onClick={() => props.deletarAtividade(props.ativ.id)}><i className="fas fa-trash me-2"></i>Deletar</button>        
              </div>
            </div>
          </div>
    )
}
