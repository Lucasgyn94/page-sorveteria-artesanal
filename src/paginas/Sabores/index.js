import React from 'react';
import './style.css';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

const Sabores = () => {
    return (
        <div>
            <Topo/>

            <main>
                <section className='secao-banner-sabores'>
                    <div className='titulo-banner-sabores'>
                        <h1>NOSSOS SABORES</h1>
                    </div>
                </section>

                <section className='limitar-secao secao-sabores'>
                    <h2>SABORES DE SORVETE</h2>
                    <div className='container-sorvetes'>
                        <div className='box-sorvete'>
                            <img src="./assets/sabor-oreo.png" title='sorvete oreo' alt="sorvete sabor oreo"/>
                            <h3>Sorvete de Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>

                        <div className='box-sorvete'>
                            <img src="./assets/sabor-pistache.png" title='sorvete pistache' alt=""sorvete sabor pistache/>
                            <h3>Sorvete Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>                 
                        </div>

                        <div className='box-sorvete'>
                            <img src="./assets/sabor-cookies-avela.png" title='sorvete cookie com avelã' alt="sorvete sabor cookie com avelã"/>
                            <h3>Sorvete Cookies & Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>

                        <div className='box-sorvete'>
                            <img src="./assets/sorbet-kiwi.png" title='sorvete de kiwi' alt="sorvete sabor kiwi"/>                            
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                        <div className='box-sorvete'>
                            <img src="./assets/sorbet-morango.png" title='sorvete de morango' alt="sorvete de morango"/>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>
                        <div className='box-sorvete'>
                            <img src="./assets/sorbet-limao.png" title='sorvete de limão' alt="sorvete de limão"/>
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </section>

            </main>
        <Rodape/>   
        </div>

    );
}

export default Sabores;

