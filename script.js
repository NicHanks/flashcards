document.addEventListener('DOMContentLoaded', () => {
    const flashcards = document.querySelectorAll('.flashcard');
    let currentIndex = 0;

    function showFlashcard(index) {
        flashcards.forEach((card, i) => {
            card.classList.remove('active');
            if (i === index) {
                card.classList.add('active');
            }
        });
    }

    function flipFlashcard(card) {
        card.classList.toggle('flipped');
    }

    function flipCard(card) {
        card.classList.toggle('flipped');
    }

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % flashcards.length;
        showFlashcard(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
        showFlashcard(currentIndex);
    });

    document.getElementById('flip').addEventListener('click', () => {
        const currentCard = flashcards[currentIndex];
        if (currentCard.classList.contains('flipped')) {
            currentCard.classList.remove('flipped');
        }
    });

    flashcards.forEach(card => {
        card.addEventListener('click', () => flipFlashcard(card));
    });

    // Show the first flashcard initially
    showFlashcard(currentIndex);
});