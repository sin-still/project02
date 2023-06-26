/* function mainMenu(){
    const menuTop=document.getElementsByClassName('m-menu')
    const menuBottom=document.querySelectorAll('.category-list')
    const menucategory=document.querySelector('.menu-category')
    let menuLength=menuTop.length

    for(let i=0;i<menuLength;i++){

        menuTop[i].addEventListener('mouseover',function(){
            for(let j=0;j<menuLength;j++){
                menuBottom[j].classList.remove('active')
            }
            menuBottom[i].classList.add('active')
        })
        menucategory.addEventListener('mouseout',function(){

            menuBottom[i].classList.remove('active');
            
        }) 
    }
}

 */
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
        });
    }

    menucategory.addEventListener('mouseleave', function () {
        for (let j = 0; j < menuLength; j++) {
            menuBottom[j].classList.remove('active');
        }
    });
}
mainMenu()