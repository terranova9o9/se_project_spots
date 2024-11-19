import "./index.css";
import headerSrc from "../images/spots_logo.svg"
import avatarSrc from "../images/avatar.jpg"
import pencilSrc from "../images/edit-icon.svg"
import plusSrc from "../images/plus-icon.svg"
import { enableValidation, validationConfig, disableButton } from "../scripts/validation.js";

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

const headerImg = document.getElementById("headerLogo");
headerImg.src = headerSrc;
const avaterImg = document.getElementById("profileAvatar");
avaterImg.src = avatarSrc;
const pencilImg = document.getElementById("profilePencil");
pencilImg.src = pencilSrc;
const plusImg = document.getElementById("profilePlusSign");
plusImg.src = plusSrc;



const editProfileModal = document.querySelector("#edit-profile-modal");
const editModalNameInput = editProfileModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editProfileModal.querySelector("#profile-description-input");
const profileForm = document.forms["edit-profile"];
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");




const cardModal = document.querySelector("#add-card-modal");
const cardModalImageLinkInput = cardModal.querySelector("#add-card-link-input");
const cardModalCaptionInput = cardModal.querySelector("#add-card-caption-input");
const cardForm = cardModal.querySelector(".modal__form");
const cardCaption = document.querySelector(".card__title");
const cardSubmitBtn = cardModal.querySelector(".modal__submit-btn");



const profileEditButton = document.querySelector(".profile__edit-btn");
const cardModalButton = document.querySelector(".profile__add-btn");
const profileCloseButton = editProfileModal.querySelector(".modal__close-btn");
const cardModalCloseButton = cardModal.querySelector(".modal__close-btn");



const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");
const cardImage = document.querySelector(".card__image");

const previewModal = document.querySelector("#preview-modal");
const previewModalImageElement = previewModal.querySelector(".modal__image");
const previewModalCaptionElement = previewModal.querySelector(".modal__caption");
const previewModalCloseBtn = previewModal.querySelector(
  ".modal__close-btn_type_preview"
);

function getCardElement(data) {
  const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);
  const cardNameElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button")

  cardNameElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_liked")
  });

  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove()
  });

  cardImageElement.addEventListener("click", () => {
    openModal(previewModal);
    previewModalImageElement.src = data.link;
    previewModalImageElement.alt = data.name;
    previewModalCaptionElement.textContent = data.name;
  });

  return cardElement;
};

function handleModalOverlay(evt) {
  if (evt.target.classList.contains("modal_opened")) {
    closeModal(evt.target);
  }
}

function handleModalEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

function openModal (modal) {
  modal.classList.add ('modal_opened');
  modal.addEventListener("click", handleModalOverlay);
  document.addEventListener("keydown", handleModalEscape);
};

function closeModal (modal) {
  if (modal) {
    modal.classList.remove('modal_opened');
    modal.removeEventListener('click', handleModalOverlay);
    document.removeEventListener('keydown', handleModalEscape);
  }
};

function handleEditFormSubmit(evt) {
  evt.preventDefault ();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal(editProfileModal);
};


function handleCardFormSubmit(evt) {
  evt.preventDefault ();
  const inputValues = {name: cardModalCaptionInput.value, link: cardModalImageLinkInput.value};
  const cardElement = getCardElement(inputValues);
  cardList.prepend(cardElement);
  cardForm.reset();
  closeModal(cardModal);
  disableButton(cardSubmitBtn, validationConfig);
};


profileEditButton.addEventListener ('click', () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  //resetValidation(editProfileModal, [editModalNameInput, editModalDescriptionInput]);
  openModal(editProfileModal);
});

profileCloseButton.addEventListener ('click', () => {
  closeModal(editProfileModal);
});


profileForm.addEventListener ('submit', handleEditFormSubmit);
cardForm.addEventListener("submit", handleCardFormSubmit);


cardModalButton.addEventListener ('click', () => {
  openModal(cardModal);
})

cardModalCloseButton.addEventListener ('click', () => {
  closeModal(cardModal);
})

previewModalCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardList.append(cardElement);
});

enableValidation(validationConfig);