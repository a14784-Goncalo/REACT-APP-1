import React, { useState } from 'react';

function Notas() {
    const [formData, setFormData] = useState({
        nome: '',
        disciplina: '',
        notasTestes: '',
        notasTrabalhos: '',
        notasAtitudes: ''
    });

    function calcularMedia() {
        const mediaTestes = parseFloat(formData.notasTestes) || 0;
        const mediaTrabalhos = parseFloat(formData.notasTrabalhos) || 0;
        const mediaAtitudes = parseFloat(formData.notasAtitudes) || 0;

        const percentagemTestes = parseFloat(formData.percentagemTestes) || 0;
        const percentagemTrabalhos = parseFloat(formData.percentagemTrabalhos) || 0;
        const percentagemAtitudes = parseFloat(formData.percentagemAtitudes) || 0;

        const mediaFinal = (mediaTestes * (percentagemTestes / 100)) +
            (mediaTrabalhos * (percentagemTrabalhos / 100)) +
            (mediaAtitudes * (percentagemAtitudes / 100));
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
                    <input type="number" className="form-control" value={formData.notasTestes} max={(20)} onChange={(e) =>
                        setFormData({ ...formData, notasTestes: e.target.value })} required />

                    <label>Notas dos Trabalhos:</label>
                    <input type="number" className="form-control" value={formData.notasTrabalhos} max={(20)} onChange={(e) =>
                        setFormData({ ...formData, notasTrabalhos: e.target.value })} required />

                    <label>Notas dos Atitudes:</label>
                    <input type="number" className="form-control" value={formData.notasAtitudes} max={(20)} onChange={(e) =>
                        setFormData({ ...formData, notasAtitudes: e.target.value })} required />

                </div>

                <div className="form-group col-3">

                    <label>(%)Testes: </label>
                    <input type="number" className="form-control" value={formData.percentagemTestes} max={(100)} onChange={(e) =>
                        setFormData({ ...formData, percentagemTestes: e.target.value })} required />

                    <label>(%)Trabalhos: </label>
                    <input type="number" className="form-control" value={formData.percentagemTrabalhos} max={(100)} onChange={(e) =>
                        setFormData({ ...formData, percentagemTrabalhos: e.target.value })} required />

                    <label>(%)Atitudes: </label>
                    <input type="number" className="form-control" value={formData.percentagemAtitudes} max={(100)} onChange={(e) =>
                        setFormData({ ...formData, percentagemAtitudes: e.target.value })} required />

                </div>

            </div>

            <div>
                <button className="btn btn-success" onClick={calcularMedia}>Calcular</button>
                {calcularMedia >= 9.5 && (
                    <p>Aluno Aprovado</p>
                )}
                {calcularMedia < 9.5 && (
                    <p>Aluno Reprovado</p>
                )}

            </div>

        </div>
    );
}

export default Notas;