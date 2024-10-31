import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { createCard, handleLikeButtonClick } from "./components/card.js";
import { openModal, closeModal } from "./components/modal.js";

// Получение элементов
const editBtn = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupFormEdit = popupTypeEdit.querySelector('.popup__form');
const inputNameFormNewCard = popupFormEdit.querySelector('.popup__input_type_name');
const inputNameFormProfile = popupFormEdit.querySelector('.popup__input_type_description');
const popupTypeImage = document.querySelector('.popup_type_image');
const imagePopup = document.querySelector('.popup__image');
const imagePopupCaption = document.querySelector('.popup__caption');
const placeList = document.querySelector('.places__list');
const popupAddButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector(".popup_type_new-card");
const formElementNewCard = popupNewCard.querySelector('.popup__form');
const inputNewCardName = formElementNewCard.querySelector('.popup__input_type_card-name');
const inputLinkNewCard = formElementNewCard.querySelector('.popup__input_type_url');
const saveNewCardBtn = popupNewCard.querySelector('.popup__button');
const closeBtns = document.querySelectorAll('.popup__close');

// Обработчик события для кнопки "Добавить"
popupAddButton.addEventListener('click', () => {
  openModal(popupNewCard);
});

// Обработчик события для кнопки "Редактировать"
editBtn.addEventListener('click', () => {
  inputNameFormNewCard.value = profileTitle.textContent;
  inputNameFormProfile.value = profileDescription.textContent;
  openModal(popupTypeEdit);
});

// Закрытие попапа по кнопке
closeBtns.forEach(button => {
  button.addEventListener('click', (event) => {
    const popup = button.closest('.popup');
    closeModal(popup);
  });
});

const popups = document.querySelectorAll('.popup_type_edit, .popup_type_image, .popup_type_new-card');
popups.forEach(popup => {
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      closeModal(popup);
    }
  });
});

// Функция для открытия попапа изображения
function openImagePopup(targetImage) {
  imagePopup.src = targetImage.src;
  imagePopup.alt = targetImage.alt;
  imagePopupCaption.textContent = targetImage.alt;
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
  profileTitle.textContent = inputNameFormNewCard.value;
  profileDescription.textContent = inputNameFormProfile.value;
  closeModal(popupTypeEdit);
});

// Обработчик добавления новой карточки
saveNewCardBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const item = {
    name: inputNewCardName.value,
    link: inputLinkNewCard.value,
  };
  const cardElement = createCard(item, handleLikeButtonClick, openImagePopup);
  placeList.prepend(cardElement);
  formElementNewCard.reset();
  closeModal(popupNewCard);
});