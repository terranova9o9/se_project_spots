const initialCards = [
{
  name: "Val Thorens", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
},
{
  name: "Restaurant terrace", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
},
{
  name: "An outdoor cafe", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
},
{
  name: "A very long bridge, over the forest and through the trees", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
},
{
  name: "Tunnel with morning light", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
},
{
  name: "Mountain house", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
},
];


// Profile Form
const editProfileModal = document.querySelector("#edit-profile-modal");
const editModalNameInput = editProfileModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editProfileModal.querySelector("#profile-description-input");
const profileForm = document.forms["edit-profile"];
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");


// Card Form
const cardModal = document.querySelector("#add-card-modal");



// Modal Elements
const profileEditButton = document.querySelector(".profile__edit-btn");
const cardModalButton = document.querySelector(".profile__add-btn");
const profileCloseButton = editProfileModal.querySelector(".modal__close-btn");
const cardModalCloseButton = cardModal.querySelector(".modal__close-btn");


// Card Template Elements
const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");
const cardImage = document.querySelector(".card__image");



function getCardElement(data) {
  const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);
  const cardNameElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");

  cardNameElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;


  return cardElement;
};

function openModal (modal) {
  modal.classList.add ('modal_opened');
};

function closeModal (modal) {
  modal.classList.remove ('modal_opened');
};

function handleEditFormSubmit(evt) {
  evt.preventDefault ();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal(editProfileModal);
};

profileEditButton.addEventListener ('click', () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});

profileCloseButton.addEventListener ('click', () => {
  closeModal(editProfileModal);
});

profileForm.addEventListener ('submit', handleEditFormSubmit);

cardModalButton.addEventListener ('click', () => {
  openModal(cardModal);
})

cardModalCloseButton.addEventListener ('click', () => {
  closeModal(cardModal);
})

function handleCardFormSubmit(evt) {
  evt.preventDefault ();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal(editProfileModal);
};

initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardList.append(cardElement);
});

