document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const modal = document.getElementById('modal');
    const modalVideo = document.getElementById('modal-video');
    const closeBtn = document.querySelector('.close');

    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            const videoUrl = item.getAttribute('data-video');
            modal.style.display = 'block';
            modalVideo.src = videoUrl;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalVideo.src = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalVideo.src = '';
        }
    });
});
