import React, { Fragment } from 'react';
import './styles.css';

const Home = () => {

    return (
        <Fragment>
            <div className="home-container">
                <div className="home-content">
                    <h1>Seja bem vindo(a) à PokeStore.</h1>
                    <p>
                        Olá, seja bem vindo à PokeStore. Esse é um desafio para a vaga de Front End Jr. proposto pela B2W Digital e
                        seu conteúdo foi desenvolvido por Kewin Costa.
                    </p>

                    <h4> ESCOLHA ABAIXO O TIPO DE POKEMON O QUAL DESEJA COMO COMPANHEIRO DAS SUAS PRÓXIMAS AVENTURAS E CLIQUE PARA IR EM SUA LOJA:</h4>
                    <div className="types-option-container">

                        <a className="fire-ref" href="/fire">Fogo</a> <a className="water-ref" href="/water">Água</a>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;