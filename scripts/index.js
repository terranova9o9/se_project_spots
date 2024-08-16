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


const profileEditButton = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const modalCloseButton = editProfileModal.querySelector(".modal__close-btn");

const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const editModalNameInput = editProfileModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const profileForm = document.forms["edit-profile"];

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


function openModal () {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  editProfileModal.classList.add ('modal_opened');
};

function closeModal () {
  editProfileModal.classList.remove ('modal_opened');
};

function handleEditFormSubmit(evt) {
  evt.preventDefault ();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal();
};

profileEditButton.addEventListener ('click', openModal);
modalCloseButton.addEventListener ('click', closeModal);
profileForm.addEventListener ('submit', handleEditFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardList.append(cardElement);
};



