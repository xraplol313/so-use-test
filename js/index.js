const pentagonItems = document.querySelectorAll(".pentagon .pentagon-item");
const pentagonBtn = document.querySelector(".pentagon-button");
const flexOrderIndex = [0, 1, 2, 3, 4, 5, 6, 7];

function shuffleOrderIndex(array) {
  return array.sort(() => Math.random() - 0.5);
}

pentagonBtn.addEventListener("click", () => {
  const shuffledNumberArr = shuffleOrderIndex(flexOrderIndex);
  pentagonItems.forEach((item, index) => {
    item.style.order = shuffledNumberArr[index];
  });
});
