//메인메뉴
function mainMenu() {
    const menuTop = document.getElementsByClassName('m-menu');
    const menuBottom = document.querySelectorAll('.category-list');
    const menucategory = document.querySelector('.menu-category');
    let menuLength = menuTop.length;

    //mouseover시 메뉴카테고리 블럭.
    for (let i = 0; i < menuLength; i++) {
        menuTop[i].addEventListener('mouseover', function () {
            for (let j = 0; j < menuLength; j++) {
                menuBottom[j].classList.remove('active');
            }
            menuBottom[i].classList.add('active');
            menucategory.classList.add('active')
        });
    }
    //mouseleave시 메뉴 하이드.
    //mouseleave와 mouseout에 차이점: out은 자식요소영역에 들어가도 빠져나간것으로 간주. 리브는 자식요소를 포함한 모든영역
    menucategory.addEventListener('mouseleave', function () {
        for (let j = 0; j < menuLength; j++) {
            menuBottom[j].classList.remove('active');
        }
        menucategory.classList.remove('active')
    });
}
mainMenu()
//모바일메뉴
function toggleMenu(){
    const mobileBtn=document.querySelector('.desk-n .menu');
    const mobileCBtn=document.querySelector('.mobile .m-close');
    const mobileMenu=document.querySelector('.mobile');
    const mobileBg=document.querySelector('.mobile-bg');
    
    //버튼클릭시 모바일 메뉴 블럭
    mobileBtn.addEventListener('click',function(){
        mobileBg.classList.add('active')
        mobileMenu.classList.add('active')
    })
    //클로즈버튼 클릭시 모바일 메뉴 하이드.
    mobileCBtn.addEventListener('click',function(){
        mobileBg.classList.remove('active')
        mobileMenu.classList.remove('active')
    })
    //bg클릭시 모바일 메뉴 하이드.
    mobileBg.addEventListener('click',function(){
        mobileBg.classList.remove('active')
        mobileMenu.classList.remove('active')

    })
}
toggleMenu()