export function openModal(modal) {
  modal.classList.add('popup_is-opened');
  modal.style.display = 'flex';

  const closeOnEsc = (event) => {
    if (event.key === 'Escape') {
      closeModal(modal);
    }
  };

  document.addEventListener('keydown', closeOnEsc);

  modal.closeOnEsc = closeOnEsc;
}

export function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
  
  setTimeout(() => {
    modal.style.display = 'none'; 
  }, 600);

  if (modal.closeOnEsc) {
    document.removeEventListener('keydown', modal.closeOnEsc);
  
    delete modal.closeOnEsc; 
  }
}