import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList =document.querySelector('.gallery');
const pictureCard = createGalleryPictureCard (galleryItems);

galleryList.insertAdjacentHTML('beforeend', pictureCard);
galleryList.addEventListener('click', onGalleryPictureCardClick);

function createGalleryPictureCard (galleryItems){
  return galleryItems
  .map(({preview, original, description}) => {
return`
<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
    `
  })
  .join('');
};

function onGalleryPictureCardClick (evt){
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
	}
	const imgUrl = evt.target.dataset.source;

	return showImgModal(imgUrl);
}

const instance = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
})

// function showImgModal (imgUrl) {
  
//   onShow: (instance) => {
//     console.log('onShow', instance);

//     document.addEventListener("keyup", checkEsc)};

//   onClose: (instance) => {
//     console.log('onClose', instance);

//     document.removeEventListener("keyup", checkEsc);
//   }
// instance.show();

// function checkEsc({ code }) {
//   console.log(code);
//   if (code === "Escape") {
//     instance.close();
//   }
// }
// }