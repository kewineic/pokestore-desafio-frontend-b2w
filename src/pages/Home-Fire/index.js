import React, { Fragment } from 'react';
import { useModal } from '../../context/Modal';
import Modal from '../../components/Modal';
import Header from '../../components/Header/index';
import Catalog from '../../components/Catalog/index';
import Cart from '../../components/Cart/index';
import Footer from '../../components/Footer/index';

import logoType from '../../assets/logo-fire.png';
import tradeIcon from '../../assets/trade-theme-firee.png';

const HomeFire = () => {

    const { isModalVisible } = useModal();

    return (
        <Fragment>
            {isModalVisible ? <Modal colorThemeModal="#720013" /> : null}

            <Header colorThemeHeader="#CC0000"
                tradeIcon={tradeIcon}
                logoType={logoType}
                redirectLogoType="/fire"
                redirectToTheme="/water"
            />

            <main className="main">
                <Catalog colorThemeCatalog="#CC0000" pokeUrl="https://pokeapi.co/api/v2/type/10/"  storageKey="Fire"/>
                <Cart colorThemeCart="#CC0000" storageKey="Fire"/>
            </main>

            <Footer colorThemeFooter="#CC0000" />

        </Fragment>
    );
};

export default HomeFire;