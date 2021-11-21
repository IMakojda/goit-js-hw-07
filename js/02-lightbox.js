import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery=document.querySelector(".gallery");

const renderCard=crateItemGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend',renderCard)

gallery.addEventListener('click',onImageClick)


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

function onImageClick(evt){
    evt.preventDefault();
   
}

 // const onEsc=function(e){
 //     if (e.key === "Escape") {
 //         document.querySelector(".basicLightbox").classList.remove('basicLightbox--visible');
 //         document.querySelector('.basicLightbox').remove();
 //     } 
 // }
//  }