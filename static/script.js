document.addEventListener("DOMContentLoaded", function() {
    const character = document.getElementById("character");
    const ship = document.getElementById("ship");

    let characterPosition = 10;
    let shipPosition = 100;

    function animate() {
        characterPosition += 0.1;
        shipPosition -= 0.2;

        if (shipPosition < -10) {
            shipPosition = 100;
        }

        character.style.left = characterPosition + "%";
        ship.style.left = shipPosition + "%";

        requestAnimationFrame(animate);
    }

    animate();
});
