import React, { Component } from "react";
import { createPortal } from "react-dom";
// import PropTypes from 'prop-types';
import { Overlay, ModalBox } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = e => {
        if (e.code === 'Escape') {
            console.log('Escape');
            this.props.onClose();
        };
    }

    handleOverlayClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

  render() {
    return createPortal(
        <Overlay onClick={this.handleOverlayClick}>
            <ModalBox>
                <img src={this.props.imageUrl} alt={this.props.imageUrl} />
            </ModalBox>
        </Overlay>, modalRoot,
    );
  }
}

Modal.protoTypes = {

};

export default Modal;
