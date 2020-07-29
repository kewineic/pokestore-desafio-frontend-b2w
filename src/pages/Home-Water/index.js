import React, { Fragment } from 'react';
import { useModal } from '../../context/Modal';
import Modal from '../../components/Modal';
import Header from '../../components/Header/index';
import Catalog from '../../components/Catalog/index';
import Cart from '../../components/Cart/index';
import Footer from '../../components/Footer/index';

import logoType from '../../assets/logo-water.png';
import tradeIcon from '../../assets/trade-theme-waterr.png';

const HomeWater = () => {

    const { isModalVisible } = useModal();

    return (
        <Fragment>

            {isModalVisible ? <Modal colorThemeModal="#3B4CCA" /> : null}

            <Header colorThemeHeader="#3B4CCA"
                tradeIcon={tradeIcon}
                logoType={logoType}
                redirectLogoType="/water"
                redirectToTheme="/fire"
            />

            <main className="main">
                <Catalog colorThemeCatalog="#3B4CCA" pokeUrl="https://pokeapi.co/api/v2/type/11/" storageKey="Water"/>
                <Cart colorThemeCart="#3B4CCA" storageKey="Water"/>
            </main>
            <Footer colorThemeFooter="#3B4CCA" />

        </Fragment>
    );
};

export default HomeWater;