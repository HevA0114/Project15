// Add event listener to the button
document.getElementById('surprise-btn').addEventListener('click', () => {
    // Create the heart popup
    const heartPopup = document.createElement('div');
    heartPopup.classList.add('popup-heart');
    heartPopup.innerHTML = "<div style='transform: rotate(-45deg);'>Would you like to go to a coffee date after classes on Monday?</div>";

    // Append the heart to the body
    document.body.appendChild(heartPopup);

    // Remove the popup after 5 seconds
    setTimeout(() => {
        heartPopup.remove();
    }, 5000);
});
