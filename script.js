document.addEventListener('DOMContentLoaded', () => {
    
    const giftBox = document.getElementById('giftBox');
    const initialContainer = document.getElementById('initial-container');
    const revealContainer = document.getElementById('revealContainer');

    function party() {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });
    }

    giftBox.addEventListener('click', () => {
        initialContainer.style.display = 'none';  
        revealContainer.style.display = 'flex';
        party();
        setInterval(party, 3000);
    });

});