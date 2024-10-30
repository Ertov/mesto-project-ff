// card.js

export function createCard(item, handleLikeButtonClick, handleImageClick) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
  const image = cardElement.querySelector('.card__image');
  image.src = item.link;
  image.alt = item.name;
  
  const title = cardElement.querySelector('.card__title');
  title.textContent = item.name;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => {
    cardElement.remove();
  });

  const likeButton = cardElement.querySelector('.card__like-button');
  likeButton.addEventListener('click', handleLikeButtonClick);

  // Добавляем обработчик клика на изображение
  image.addEventListener('click', () => handleImageClick(image));

  return cardElement;
}

export function handleLikeButtonClick(event) {
  const button = event.target;
  button.classList.toggle('card__like-button_is-active');
}