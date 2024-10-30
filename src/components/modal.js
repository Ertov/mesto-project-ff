

export function openModal(modal) {
  modal.classList.add('popup_is-opened');
  modal.style.display = 'flex';
}

export function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
  setTimeout(() => {
    modal.style.display = 'none'; 
  }, 600);
}