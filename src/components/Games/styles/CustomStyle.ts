import { ModalStyles } from '../../../interfaces/Interfaces';

export const customStyles: ModalStyles = {
  // Define estilos para a sobreposição do modal
  overlay: {
    position: 'fixed',  //Fixa a posição da sobreposição em relação à janela de visualização
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#161313',
  },
  content: {
    maxHeight: 'calc(100vh - 210px)',
    overflowY: 'auto',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#161313',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    display: 'grid',
    gap: '10px',
  },
};
