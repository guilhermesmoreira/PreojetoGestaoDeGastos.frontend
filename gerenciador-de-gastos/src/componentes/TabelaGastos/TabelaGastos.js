import React, { useState, useEffect } from 'react';
import style from "./TabelaGastos.module.css";

const formatarData = (data) => {
    if (!data) return "";
    const date = new Date(data);
    return date.toLocaleDateString("pt-BR");
};

// Função para formatar o valor como R$
const formatarValor = (valor) => {
    if (isNaN(valor)) return "";
    return `R$ ${valor.toFixed(2).replace(".", ",")}`;
};

// Função para formatar categorias com a primeira letra maiúscula
const formatarCategoria = (categoria) => {
    return categoria.charAt(0).toUpperCase() + categoria.slice(1);
};

export function TabelaGastos({ dados}) {
    if (!dados || dados.length === 0) {
        return <p className={style.no_data}>Nenhum dado disponível</p>;
    }

    return (
        <div className={style.table_container}>            
            <table className={style.table}>
                <thead>
                    <tr>
                        {Object.keys(dados[0]).map((key) => (
                            <th key={key}>{key.toUpperCase()}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, index) => (
                        <tr key={index}>
                            {Object.keys(item).map((key, idx) => (
                                 <td key={idx} className={key === "valor" ? style.value : key === "categoria" ? style.category : ""}>
                                 {key === "data" ? formatarData(item[key]) :
                                  key === "valor" ? formatarValor(item[key]) :
                                  key === "categoria" ? formatarCategoria(item[key]) :
                                  item[key]}
                             </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}