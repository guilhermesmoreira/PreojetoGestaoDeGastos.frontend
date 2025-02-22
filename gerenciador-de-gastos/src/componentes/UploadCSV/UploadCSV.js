import React, { useState } from 'react';
import axios from 'axios';

export function UploadCSV() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    //Função para lidar com o arquivo selecionado
    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        if(uploadedFile) {
            setFile(uploadedFile);
            setMessage('');
            console.log("Arquivo selecionado:", uploadedFile.name);
        }
    };


    //Função para exportar o arquivo para o backend

    const handleFileUpload = async () => {
        if (!file) {
            console.error("Nenhum arquivo selecionado.");
            setMessage("Nenhum arquivo selecionado.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("http://localhost:8000/upload/", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Erro ao enviar o arquivo");
            }

            const data = await response.json();
            console.log("Resposta do servidor:", data);
            setMessage("Arquivo enviado com sucesso!");
        } catch (error) {
            console.error("Erro ao conectar com o servidor:", error);
            setMessage("Erro ao conectar com o servidor.");
        }
    };

    return (
        <div>
            <h2>Upload de Arquivo CSV</h2>
            <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
            />
            <button onClick={handleFileUpload}>Enviar</button>

            {message && <p>{message}</p>}
        </div>
    )
}


