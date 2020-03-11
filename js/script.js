document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.menu-btn');
    btn.addEventListener('click', function(){
        document.querySelector('.main-menu').classList.toggle('show');
    })
})
