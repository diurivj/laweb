const mainElement = document.getElementById('photos-grid');
const imageDetailElement = document.getElementById('image-detail');
const dialogElement = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');
const imageDetailText = document.getElementById('image-detail-text');
const openAddPost = document.getElementById('open-add-post');
const addPostDialog = document.getElementById('add-post');
const newPostSrc = document.querySelector('input#post-src');
const newPostAlt = document.querySelector('input#post-alt');
const addPostButton = document.getElementById('submit-post');

// Este ciclo for, se le conoce como for of
for (const image of mainElement.children) {
  image.onclick = () => {
    showPhotoInModal(image);
  };
}

// Cierra el modal
closeModalButton.onclick = () => {
  dialogElement.close();
};

openAddPost.onclick = () => {
  addPostDialog.showModal();
};

addPostButton.onclick = () => {
  const img = document.createElement('img');
  img.setAttribute('src', newPostSrc.value);
  img.setAttribute('alt', newPostAlt.value);
  img.className = 'w-full h-full aspect-square object-cover';
  showPhotoInModal(img);
  mainElement.appendChild(img);

  // TODO: agregar la funcion de que cuando le des click, la muestre en el modal alv pariente!
  addPostDialog.close();
};

function showPhotoInModal(image) {
  dialogElement.showModal();

  // 2. Setear las dimensiones de la imagen del dialogo
  imageDetailElement.style.width = 'auto';
  imageDetailElement.style.height = '80dvh';

  // 3. Tomamos el src y alt de la imagen que le estamos dando click.
  const imageSrc = image.getAttribute('src');
  const imageAlt = image.getAttribute('alt');

  // 4. Seteamos el src de la imagen que dimos click en la imagen de detalle.
  imageDetailElement.setAttribute('src', imageSrc);
  imageDetailElement.setAttribute('alt', imageAlt);

  // 5. Apendeamos un texto nuevo
  imageDetailText.innerText = imageAlt;
}
