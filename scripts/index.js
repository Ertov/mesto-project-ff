// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

function createCard(cardData, deleteCallback) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const image = cardElement.querySelector(".card__image");
  image.src = cardData.link;
  image.alt = cardData.name;
  const title = cardElement.querySelector(".card__title");
  title.textContent = cardData.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
      deleteCallback(cardElement);
  });

  return cardElement;
}

function deleteCard(card) {
  card.remove();
}

const cardContainer = document.querySelector(".places__list");

for (let i = 0; i < initialCards.length; i++) {
  cardContainer.append(createCard(initialCards[i], deleteCard));
}
