const toggle = document.querySelector('.toggle');

const items = document.querySelectorAll('.item')


toggle.addEventListener('click', () => {
    items.forEach((item) => {
        item.classList.toggle('active')
    })
})