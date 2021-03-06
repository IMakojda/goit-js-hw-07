import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery=document.querySelector(".gallery");

const renderCard=crateItemGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend',renderCard)

function crateItemGallery (galleryItems){

    return galleryItems.map(({preview,original,description})=>{
        return `
        
            <a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                    title="${description}"
                />
            </a>
        `
    }).join("");

}
var lightbox = new SimpleLightbox('.gallery a');
console.log(lightbox);


 