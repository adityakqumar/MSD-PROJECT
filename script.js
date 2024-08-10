document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
    const teammatePhoto = document.getElementById('teammate-photo');
    const teammateName = document.getElementById('teammate-name');
    const teammateDescription = document.getElementById('teammate-description');

    teamMembers.forEach(member => {
        member.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const info = this.getAttribute('data-info');
            const imgSrc = this.querySelector('img').src;

            // Update the content in the background-info section
            teammatePhoto.src = imgSrc;
            teammatePhoto.alt = name;
            teammatePhoto.style.display = "block"; // Ensure the image is visible
            teammateName.textContent = name;
            teammateDescription.textContent = info;
        });
    });
});
