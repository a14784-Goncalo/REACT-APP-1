import React, { useState } from 'react';

function Notas() {
    const [formData, setFormData] = useState({
        nome: '',
        disciplina: '',
        notasTestes: '',
        notasTrabalhos: '',
        notasAtitudes: '',
        percentagemTestes: '',
        percentagemTrabalhos: '',
        percentagemAtitudes: ''
    });

    const [mediaFinal, setMediaFinal] = useState(null);

    function calcularMedia() {
        const mediaTestes = parseFloat(formData.notasTestes);
        const mediaTrabalhos = parseFloat(formData.notasTrabalhos);
        const mediaAtitudes = parseFloat(formData.notasAtitudes);

        const percentagemTestes = parseFloat(formData.percentagemTestes);
        const percentagemTrabalhos = parseFloat(formData.percentagemTrabalhos);
        const percentagemAtitudes = parseFloat(formData.percentagemAtitudes);

        const resultado =
            (mediaTestes * (percentagemTestes / 100)) +
            (mediaTrabalhos * (percentagemTrabalhos / 100)) +
            (mediaAtitudes * (percentagemAtitudes / 100));

        setMediaFinal(resultado.toFixed(2));
    }

    function limparNotas() {
        setFormData({
            nome: '',
            disciplina: '',
            notasTestes: '',
            notasTrabalhos: '',
            notasAtitudes: '',
            percentagemTestes: '',
            percentagemTrabalhos: '',
            percentagemAtitudes: ''
        });

        setMediaFinal(null);
    }

    return (
        <div>

            <div className="row">

                <div className="form-group col-8">
                    <label>Nome do Aluno</label>
                    <input type="text" className="form-control" value={formData.nome} onChange={(e) =>
                        setFormData({ ...formData, nome: e.target.value })} required />
                </div>

                <div className="form-group col-4">
                    <label>Disciplina</label>
                    <input type="text" className="form-control" value={formData.disciplina} onChange={(e) =>
                        setFormData({ ...formData, disciplina: e.target.value })} required />
                </div>

            </div>

            <div className="row">
                <div className="form-group col-3">

                    <label>Notas dos Testes:</label>
                    <input type="number" className="form-control" value={formData.notasTestes} max={(20)} min={(0)} onChange={(e) =>
                        setFormData({ ...formData, notasTestes: e.target.value })} required />

                    <label>Notas dos Trabalhos:</label>
                    <input type="number" className="form-control" value={formData.notasTrabalhos} max={(20)} min={(0)} onChange={(e) =>
                        setFormData({ ...formData, notasTrabalhos: e.target.value })} required />

                    <label>Notas dos Atitudes:</label>
                    <input type="number" className="form-control" value={formData.notasAtitudes} max={(20)} min={(0)} onChange={(e) =>
                        setFormData({ ...formData, notasAtitudes: e.target.value })} required />

                </div>

                <div className="form-group col-3">

                    <label>(%)Testes: </label>
                    <input type="number" className="form-control" value={formData.percentagemTestes} max={(40)} min={(0)} onChange={(e) =>
                        setFormData({ ...formData, percentagemTestes: e.target.value })} required />

                    <label>(%)Trabalhos: </label>
                    <input type="number" className="form-control" value={formData.percentagemTrabalhos} max={(40)} min={(0)} onChange={(e) =>
                        setFormData({ ...formData, percentagemTrabalhos: e.target.value })} required />

                    <label>(%)Atitudes: </label>
                    <input type="number" className="form-control" value={formData.percentagemAtitudes} max={(20)} min={(0)} onChange={(e) =>
                        setFormData({ ...formData, percentagemAtitudes: e.target.value })} required />

                </div>

            </div>

            <div className="row col-6">
                <button className="btn btn-success mr-2" onClick={calcularMedia}>Calcular</button>
                <button className="btn btn-warning" onClick={limparNotas}>Limpar</button>
            </div>
            <div>
                <h1 className="text-center">
                    {parseFloat(mediaFinal) >= 9.5 &&
                        <p className="text-success text-center">
                            Aluno Aprovado
                        </p>
                    }

                    {parseFloat(mediaFinal) < 9.5 &&
                        <p className="text-danger text-center">
                            Aluno Reprovado
                        </p>
                    }
                </h1>
            </div>

        </div>
    );
}

export default Notas;