// scripts.js
function toggleMenu() {
    var menuList = document.getElementById("menuList");
    menuList.classList.toggle("active");
}
// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const countdown = () => {
        const now = new Date().getTime();
        const countDownDate = new Date("Jul 12, 2025 23:59:59").getTime();
        const distance = countDownDate - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
        }
    };

    countdown();
    setInterval(countdown, 1000);
});


// barra de busqueda
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchInput').value = '';
});

document.getElementById('btn-search').addEventListener('click', performSearch);
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    let url = '';

    switch (query) {
        case 'cocina':
            url = 'cocina.html';
            break;
        case 'entretenimiento':
            url = 'entretenimiento.html';
            break;
        case 'computacion':
            url = 'computacion.html';
            break;
        case 'smartphones':
            url = 'smartphones.html';
            break;
        case 'audio':
            url = 'audio.html';
            break;
        case 'electrodomesticos':
            url = 'electrodomesticos.html';
            break;
        default:
            alert('Por favor, ingrese una búsqueda válida.');
            return;
    }

    window.location.href = url;
}

