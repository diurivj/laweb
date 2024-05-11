const mainElement = document.getElementById('photos-grid');
const imageDetailElement = document.getElementById('image-detail');

// for of
for (const image of mainElement.children) {
  image.onclick = element => {
    const imageSrc = image.getAttribute('src');
    imageDetailElement.setAttribute('src', imageSrc);
  };
}
