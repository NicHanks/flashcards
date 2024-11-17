const flashcard = document.querySelector('.flashcard');
const toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', () => {
  flashcard.classList.toggle('flipped');
});

flashcard.classList.add('flipped', () => {
});