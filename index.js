const addButton = document.getElementById('add-button');
const minusButton = document.getElementById('minus-button');
const count = document.getElementById('count');

addButton.onclick = () => {
  const prevCount = Number(count.innerText);
  const newCount = prevCount + 1;
  count.innerText = newCount;
};

minusButton.onclick = () => {
  const prevCount = Number(count.innerText);
  const newCount = prevCount - 1;
  count.innerText = newCount;
};
