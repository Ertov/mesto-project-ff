export function openModal(modal) {
  modal.classList.add('popup_is-opened');
  modal.style.display = 'flex';

  // Объявляем функцию closeOnEsc как обычную функцию
  const closeOnEsc = function(event) {
    if (event.key === 'Escape') {
      closeModal(modal);
    }
  };

  document.addEventListener('keydown', closeOnEsc);

  // Сохраняем ссылку на функцию в объекте modal
  modal.closeOnEsc = closeOnEsc;
}

export function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
  
  setTimeout(() => {
    modal.style.display = 'none'; 
  }, 600);

  // Проверяем и удаляем обработчик события
  if (modal.closeOnEsc) {
    document.removeEventListener('keydown', modal.closeOnEsc);
    delete modal.closeOnEsc; 
  }
}