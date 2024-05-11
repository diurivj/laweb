const mainElement = document.getElementById('photos-grid');
const imageDetailElement = document.getElementById('image-detail');
const dialogElement = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');
const imageDetailText = document.getElementById('image-detail-text');

// Este ciclo for, se le conoce como for of
for (const image of mainElement.children) {
  image.onclick = () => {
    // 1. Abrir el modal
    dialogElement.showModal();

    // 2. Tomar las medidas de la imagen original
    const styles = window.getComputedStyle(image);
    const width = styles.width;
    const height = styles.height;

    // 3. Setear las dimensiones de la imagen del dialogo
    imageDetailElement.style.width = 'auto';
    imageDetailElement.style.height = '80dvh';

    // 4. Tomamos el src y alt de la imagen que le estamos dando click.
    const imageSrc = image.getAttribute('src');
    const imageAlt = image.getAttribute('alt');

    // 5. Seteamos el src de la imagen que dimos click en la imagen de detalle.
    imageDetailElement.setAttribute('src', imageSrc);
    imageDetailElement.setAttribute('alt', imageAlt);

    // 6. Apendeamos un texto nuevo
    imageDetailText.innerText = imageAlt;
  };
}

// Cierra el modal
closeModalButton.onclick = () => {
  dialogElement.close();
};
