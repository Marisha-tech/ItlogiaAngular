document.getElementById('main-action').onclick = () => {
    document.getElementById('cars').scrollIntoView({behavior: 'smooth'});
};

let buttons = document.getElementsByClassName('car-button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
        document.getElementById('price').scrollIntoView({behavior: 'smooth'});
    };
}

document.getElementById('price-action').onclick = () => {
    if (document.getElementById('name').value === '') {
        alert('Заполните поле имя');
    } else if (document.getElementById('phone').value === '') {
        alert('Заполните поле телефон');
    } else if (document.getElementById('car').value === '') {
        alert('Заполните поле автомобиль');
    } else {
        alert('Спасибо за заявку. Мы свяжемся с Вами в ближайшее время!');
    }
};

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.7) / 5) + 'px,' + ((event.clientY * 0.7) / 5) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.7 * window.pageYOffset) + 'px';
    })
});
