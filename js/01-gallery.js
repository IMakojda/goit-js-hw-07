
import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const gallery=document.querySelector(".gallery");

const renderCard=crateItemGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend',renderCard)

gallery.addEventListener('click',onImageClick)


function crateItemGallery (galleryItems){

    return galleryItems.map(({preview,original,description})=>{
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    }).join("");

}

function onImageClick(evt){
   evt.preventDefault(); 
   
  const divInGallery=evt.target.classList.contains('gallery__image')
    
  if (!divInGallery){
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

instance.show()
}


document.addEventListener("keydown", closeImgEsc);

function closeImgEsc(event) {
    const visible = basicLightbox.visible();
    
    if (visible!==true){return}
    else {
        document.querySelector(".basicLightbox").classList.remove('basicLightbox--visible');
        document.querySelector('.basicLightbox').remove();
    }
    
}



  
