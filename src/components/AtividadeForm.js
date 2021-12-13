import { useEffect, useState } from 'react'

const atividadeInicial  = {
    id: 0,
    titulo: '',
    prioridade: 0,
    descricao: '',
}

export default function AtividadeForm(props) {
    const [atividade, setAtividade]= useState(atividadeAtual())
    useEffect(() => {
        if(props.atividadeSelecionada.id !== 0)
            setAtividade(props.atividadeSelecionada)
           
    }, [props.atividadeSelecionada]) //mudanca de estado em qualquer parte do component e o colchetes serve para indicar o estado que voce quer analisar

    const InputTextHandler = (e) => {
        const {name, value} = e.target
        setAtividade({...atividade, [name]:value })//adiciona propriedade ao objeto
    }

    function atividadeAtual(){
        if (props.atividadeSelecionada.id !== 0){
            return props.atividadeSelecionada
        }
        else{
            return atividadeInicial
        }
    }

    const handleCancelar = (e) => {
        e.preventDefault(e)

        props.cancelarAtividade()
        setAtividade(atividadeInicial)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(props.atividadeSelecionada.id !== 0)
            props.atualizarAtividade(atividade)
        else
            props.addAtividade(atividade)

        setAtividade(atividadeInicial)
    }
    
    return (
        <>
        <h1>Atividade {atividade.id !== 0 ? atividade.id : ''}</h1>
        <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
            <label className="form-label">Título</label>
            <input type="text" className="form-control" id="titulo" name ="titulo"
            onChange={InputTextHandler} value={atividade.titulo}>
            </input>
            </div>
            <div class="col-md-6">
                <label class="form-label">Prioridade</label>
                <select id="prioridade" class="form-select" name ="prioridade"
            onChange={InputTextHandler} value={atividade.prioridade}>
                <option defaultValue="0">Selecionar...</option>
                <option value="1">Baixa</option>
                <option value="2">Média</option>
                <option value="3">Alta</option>
                </select>
            </div>
            <div className="col-md-12">
            <label className="form-label">Descrição</label>
            <textarea type="text" className="form-control" id="descricao" name ="descricao"
            onChange={InputTextHandler} value={atividade.descricao}>
            </textarea>
            <hr/>
            </div>
            <div className="col-12 mt-0">
            { atividade.id === 0 ?
            <button type="submit" className="btn btn-secondary" > <i className="fas fa-plus me-2"></i> Atividade </button> :
             
            <><button type="submit" className="btn btn-success me-2"><i className="fas fa-plus me-2"></i>  Salvar </button>

            <button type="button" className="btn btn-warning" onClick={handleCancelar}> <i className="fas fa-plus me-2"></i> Cancelar </button>
            </>

        
        }
            </div>
      </form>
      </>
    )
}
