

import { useState } from 'react';
import logo from '../../assets/img/XMLID_1336_.png';
import carro from '../../assets/img/carro2.png'

import './index.scss';




export default function Atividade() {

    const[capital, setCapital] = useState('');
    const[periodo, setPeriodo] = useState('');
    const[taxa, setTaxa] = useState('');
    const[resultado, setResultado] = useState(0);
    const[parcela, setParcela] = useState(0);


    function adicionarTotal() {
        let x = capital * ( (1 +(taxa/100)) ** periodo)
        setResultado(x)

        let r = x / periodo
        setParcela(r)
    }


 


    return (
        <div className="pagina-carro">
            <div className="cabecalho">
                <img src={logo} />
            <h1>Portifolio.me</h1>
            </div>

            <div className="conteudo">

                <h1>Simulador de Compra de Veículo</h1>
                <div className="subcontainer">
                    <div className="esquerda">
                        <img src={carro} alt="imagem do carro" />
                    </div>

                    <div className="direita">
                        <div className='input-1'>
                            <h1>Valor Total</h1>
                            <input type="text" value={capital} onChange={e => setCapital(e.target.value)} /> 
                        </div>

                        <div className='segundo-bloco'>
                            <div className='input-2'>
                                <h1>Parcelas</h1>
                                <input type="text" value={periodo} onChange={e => setPeriodo(e.target.value)}/>
                            </div>

                            <div className='input-3'>
                                <h1>Juros Mensal(%)</h1>
                                <input type="text" value={taxa} onChange={e => setTaxa(e.target.value)}/>
                            </div>
                        </div>

                        <button onClick={adicionarTotal}>Calcular</button>


                        <div>
                            Parcela: R${parcela.toFixed(2)}
                        </div>

                        <div>
                            Valor Total: R${resultado.toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




