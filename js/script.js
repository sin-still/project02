function mainMenu() {
    const menuTop = document.getElementsByClassName('m-menu');
    const menuBottom = document.querySelectorAll('.category-list');
    const menucategory = document.querySelector('.menu-category');
    let menuLength = menuTop.length;

    for (let i = 0; i < menuLength; i++) {
        menuTop[i].addEventListener('mouseover', function () {
            for (let j = 0; j < menuLength; j++) {
                menuBottom[j].classList.remove('active');
            }
            menuBottom[i].classList.add('active');
            menucategory.classList.add('active')
        });
    }

    menucategory.addEventListener('mouseleave', function () {
        for (let j = 0; j < menuLength; j++) {
            menuBottom[j].classList.remove('active');
        }
        menucategory.classList.remove('active')
    });
}
mainMenu()

function toggleMenu(){
    const mobileBtn=document.querySelector('.desk-n .menu');
    const mobileCBtn=document.querySelector('.mobile .m-close');
    const mobileMenu=document.querySelector('.mobile');
    const mobileBg=document.querySelector('.mobile-bg');
    
    mobileBtn.addEventListener('click',function(){
        mobileBg.classList.add('active')
        mobileMenu.classList.add('active')
        /* mobileMenu.style.right=0; */
    })
    mobileCBtn.addEventListener('click',function(){
        mobileBg.classList.remove('active')
        mobileMenu.classList.remove('active')
        /* mobileMenu.style.right=-270+'px'; */
    })
}
toggleMenu()