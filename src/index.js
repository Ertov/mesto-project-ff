import "./pages/index.css";
import { initialCards } from "./scripts/cards.js";
import { createCard, handleLikeButtonClick } from "./components/card.js";
import { openModal, closeModal } from "./components/modal.js";

// Получение элементов
const editBtn = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupFormEdit = popupTypeEdit.querySelector('.popup__form');
const formName = popupFormEdit.querySelector('.popup__input_type_name');
const formDescription = popupFormEdit.querySelector('.popup__input_type_description');
const popupTypeImage = document.querySelector('.popup_type_image');
const imagePopup = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const placeList = document.querySelector('.places__list');
const popupAddButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector(".popup_type_new-card");
const formElementNewCard = popupNewCard.querySelector('.popup__form');
const newCardName = formElementNewCard.querySelector('.popup__input_type_card-name');
const linkNewCard = formElementNewCard.querySelector('.popup__input_type_url');
const saveNewCardBtn = popupNewCard.querySelector('.popup__button');
const closeBtns = document.querySelectorAll('.popup__close');

// Обработчик события для кнопки "Добавить"
popupAddButton.addEventListener('click', () => {
  openModal(popupNewCard);
});

// Обработчик события для кнопки "Редактировать"
editBtn.addEventListener('click', () => {
  formName.value = profileTitle.textContent;
  formDescription.value = profileDescription.textContent;
  openModal(popupTypeEdit);
});

// Закрытие попапа по кнопке
closeBtns.forEach(button => {
  button.addEventListener('click', (event) => {
    const popup = button.closest('.popup');
    closeModal(popup);
  });
});

// Закрытие попапа при клике вне его области
window.addEventListener('click', (event) => {
  const popups = document.querySelectorAll('.popup_is-opened');
  popups.forEach(popup => {
    if (event.target === popup) {
      closeModal(popup);
    }
  });
});

// Функция для открытия попапа изображения
function openImagePopup(targetImage) {
  imagePopup.src = targetImage.src;
  imagePopup.alt = targetImage.alt;
  popupCaption.textContent = targetImage.alt;
  openModal(popupTypeImage);
}

// Создаем карточки и добавляем их в контейнер
initialCards.forEach(cardItem => {
  const card = createCard(cardItem, handleLikeButtonClick, openImagePopup);
  placeList.append(card);
});

// Обработчик отправки формы редактирования профиля
popupFormEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileTitle.textContent = formName.value;
  profileDescription.textContent = formDescription.value;
  closeModal(popupTypeEdit);
});

// Обработчик добавления новой карточки
saveNewCardBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const item = {
    name: newCardName.value,
    link: linkNewCard.value,
  };
  const cardElement = createCard(item, handleLikeButtonClick, openImagePopup);
  placeList.prepend(cardElement);
  formElementNewCard.reset();
  closeModal(popupNewCard);
});