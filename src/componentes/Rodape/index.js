import React from "react";
import './style.css';

const Rodape = () => {
    return (
        <footer>
            <div className="limitar-secao container-logo-informacoes">
                <img src="../assets/logo.png" alt=""/>

                <div>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Contorno, 150</p>
                    <p>Goiânia, GO 74000-000</p>
                </div>

                <div>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com.br</p>
                    <p>Tel: (62) 3456-7890</p>    
                </div>
                
                <div>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>

            <div className="limitar-secao direito-autoral">
                <p>Gelateria. Orgulhosamente desenvolvido por Lucas Ferreira da Silva</p>
            </div>
        </footer>
    );
}

export default Rodape;