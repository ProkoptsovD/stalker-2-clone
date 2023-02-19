import * as ReactDom from 'react-dom';
import classNames from 'classnames';
import { animated, useTransition, UseTransitionProps } from '@react-spring/web';

import styles from './modal.module.css';
import Icon from '../icon';

import { ICON_NAME } from '../../types/icon.type';
import React from 'react';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

function Modal({
  children,
  onClose,
  backdropStyles,
  modalBodyStyles,
  closeButtonStyles,
  configTransition
}: ModalProps) {
  const transitions = useTransition(children, configTransition ? configTransition() : {});

  function backdropClickHandler({ target, currentTarget }: React.MouseEvent<HTMLDivElement>) {
    if (target !== currentTarget) return;

    onClose();
  }

  React.useEffect(() => {
    function escapeKeyDownHandler(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;

      onClose();
    }

    window.addEventListener('keydown', escapeKeyDownHandler);

    return () => window.removeEventListener('keydown', escapeKeyDownHandler);
  }, []);

  return ReactDom.createPortal(
    transitions((style, items) => (
      <animated.div
        className={classNames(styles.backdrop, backdropStyles)}
        onClick={backdropClickHandler}
        style={style}
      >
        <div className={classNames(styles.modal_body, modalBodyStyles)}>
          {items}
          <button
            type="button"
            className={classNames(styles.close, closeButtonStyles)}
            onClick={onClose}
          >
            <Icon name={ICON_NAME.X_CLOSE} className={classNames(styles.icon)} />
          </button>
        </div>
      </animated.div>
    )),
    modalRoot
  );
}

export default Modal;

export type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  backdropStyles?: string;
  modalBodyStyles?: string;
  closeButtonStyles?: string;
  configTransition?: () => ModalTransitionConfg;
};

export type ModalTransitionConfg = UseTransitionProps;
