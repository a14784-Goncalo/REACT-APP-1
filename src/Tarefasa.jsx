import React, { useState } from 'react';

function Tarefasa() {
    const [formData, setFormData] = useState({
        novoId: 1,
        titulo: '',
        data: '',
        descricao: ''
    });

    const [tarefasSubmetidas, setTarefasSubmetidas] = useState(null);

    const novoId = Date.now(); // Gera um número com base no tempo

    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        setTarefasSubmetidas(formData); // guarda os dados preenchidos
    }

    function limparTarefas() {
        setFormData({ novoId: '', titulo: '', data: '', descricao: '' });
        setTarefasSubmetidas(null);
    }
    return (
        <div className='mt-4 row'>
            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}

                    <div className="form-group">
                        <label>Titulo</label>
                        <input type="text" className="form-control" value={formData.titulo} onChange={(e) =>

                            setFormData({ ...formData, titulo: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Data</label>
                        <input type="text" className="form-control" value={formData.data} onChange={(e) =>

                            setFormData({ ...formData, data: e.target.value })} />
                    </div>

                    <div className="form-group">
                        <label>Descricao</label>
                        <input type="text" className="form-control" rows="3" value={formData.descricao} onChange={(e) =>

                            setFormData({ ...formData, descricao: e.target.value })} required />
                    </div>

                    {/* Botões de ação */}
                    <button className="btn btn-success mr-2">Enviar</button>

                    <button type="button" className="btn btn-outline-secondary"

                        onClick={limparTarefas}>Limpar</button>
                </form>

            </div>

            <div className="col-6">

            </div>

            {/* Mostra os dados submetidos se existirem */}
            {tarefasSubmetidas && (
                <div className="card mt-4">
                    <div className="card-body">
                        <h5 className="card-title">Tarefa {novoId}</h5>
                        <p><strong>Id:</strong> {tarefasSubmetidas.novoId}</p>
                        <p><strong>Titulo:</strong> {tarefasSubmetidas.titulo}</p>
                        <p><strong>Data:</strong> {tarefasSubmetidas.data}</p>
                        <p><strong>Descricao:</strong> {tarefasSubmetidas.descricao}</p>
                    </div>
                </div>
            )}
        </div>
    );

}

export default Tarefasa;