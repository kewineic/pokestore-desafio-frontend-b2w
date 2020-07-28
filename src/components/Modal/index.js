import React from 'react';
import { useModal } from '../../context/Modal';
import linkedinIcon from "../../assets/linkedin-icon.png";
import githubIcon from '../../assets/git-link.png';
import bw2Icon from '../../assets/b2w-icon.png';
import './style.css';

const Modal = (props) => {
    const colorThemeModal = props.colorThemeModal;
    const { setIsModalVisible } = useModal();

    const closeModal = () => {
        setIsModalVisible(false)
    }

    const outsideClick = (e) => {
        const id = "modal";
        if (e.target.id === id) closeModal()
    };

    return (
        <div id="modal" className="modal" onClick={outsideClick}>

            <div className="modal-container" style={{ color: colorThemeModal }}>
                <button className="onClose" onClick={closeModal}></button>

                <div className="modal-content">
                    <h2>Parabéns, treinador!!</h2>
                    <h3>Aproveite sua próxima aventura com o(s) seus novo(s) companheiro(s)!!</h3>
                    <p>Cansado de se aventurar sozinho? Acesse um dos links abaixo e vamos treinar juntos!</p>

                    <div className="modal-content-links">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kewineic/">
                            <img alt="Linkedin Icon" src={linkedinIcon} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kewineic">
                            <img alt="Github Icon" src={githubIcon} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://b2w.gupy.io/">
                            <img alt="B2W Digital Icon" src={bw2Icon} />
                        </a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Modal;