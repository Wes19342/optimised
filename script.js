document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    const copyButton = document.getElementById('copy-ip');
    const serverIp = document.getElementById('server-ip');

    if (copyButton && serverIp) {
        copyButton.addEventListener('click', function() {
            navigator.clipboard.writeText(serverIp.textContent).then(() => {
                copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
                }, 2000);
            });
        });
    }

    const minPlayers = 5;
    const maxPlayers = 50;
    const randomPlayers = Math.floor(Math.random() * (maxPlayers - minPlayers + 1)) + minPlayers;
    document.getElementById("playerCount").textContent = randomPlayers;
});