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
function toggleMenu() {
  const mobileBtn = document.querySelector('.desk-n .menu');
  const mobileCBtn = document.querySelector('.mobile .m-close');
  const mobileMenu = document.querySelector('.mobile');
  const mobileBg = document.querySelector('.mobile-bg');
  

  //버튼클릭시 모바일 메뉴 블럭
  mobileBtn.addEventListener('click', function () {
    mobileBg.classList.add('active')
    mobileMenu.classList.add('active')
  })
  //클로즈버튼 클릭시 모바일 메뉴 하이드.
  mobileCBtn.addEventListener('click', function () {
    mobileBg.classList.remove('active')
    mobileMenu.classList.remove('active')
  })
  //bg클릭시 모바일 메뉴 하이드.
  mobileBg.addEventListener('click', function () {
    mobileBg.classList.remove('active')
    mobileMenu.classList.remove('active')

  })
  
  
}
toggleMenu()
function loginPage() {
  const loginBtn = document.querySelector('.loginPageBt');
  // const loginCBtn=document.querySelector('.mobile .m-close');
  const loginPage = document.querySelector('.loginPage');
  const loginBg = document.querySelector('.login-bg');
  const mLoginPageBt = document.querySelector('.m-loginPageBt')
  const mobileMenu = document.querySelector('.mobile');
  const mobileBg = document.querySelector('.mobile-bg');
  const loginclose = document.querySelector('.loginPage-close');

  loginBtn.addEventListener('click',function(){
    loginBg.classList.add('active')
    loginPage.classList.add('active')
  })  
  loginBg.addEventListener('click', function () {
    loginBg.classList.remove('active')
    loginPage.classList.remove('active')
  })
  mLoginPageBt.addEventListener('click',function(){
    loginBg.classList.add('active')
    loginPage.classList.add('active')
    mobileBg.classList.remove('active')
    mobileMenu.classList.remove('active')
  })  
  loginclose.addEventListener('click',function(){
    loginBg.classList.remove('active')
    loginPage.classList.remove('active')
  })  


}
loginPage() 


/* 랜덤이미지 */
function randomimage() {
  /* let pairs = [
      { image: './img/Thum_121-2.jpg', text: '비오는 날 채색하는 <br>아름다운 협업' },
      { image: './img/Thum_21-4.jpg', text: '셀피마니아를 위한 <br>특별한 포토존, 아트거울' },
      { image: './img/Thum_1-8.jpg', text: '【내 작품 판매하기】<br>PB Labs의 첫번째 프로젝트를 소개합니다!' },
      { image: './img/거장의에디션3.jpg', text: '우리집 미술관 <br>마스터피스의 생생한 감동' },
      { image: './img/Thum_12-11.jpg', text: '호암재단이 선택한 <br>김환기의 40년 예술 여정' },
      { image: './img/Thum_12-18.jpg', text: '프베랑 썸머, <br>LUCKY BOY EVENT' },
      { image: './img/Thum_12-16.jpg', text: '다정한 시선이 흐트러지지 않게 <br>윤형택 개인전' },
      { image: './img/Thum_12-15.jpg', text: '가장 밝은 세상에서 전하는 위로 <br>김제언 인터뷰' },
      { image: './img/Thum_22-10.jpg', text: '빛의 모습에 따라 <br>달라지는 매력' },
      { image: './img/Thum_122.jpg', text: 'home sweet home! <br>그레타프리든' },
      { image: './img/Thum_120-1.png', text: '체감온도 -5° 여름 인테리어 <br>100만원대 이하 에디션 추천'}
  ]; */
  let images = [
    './img/Thum_121-2.jpg',
    './img/Thum_21-4.jpg',
    './img/Thum_1-8.jpg',
    './img/거장의에디션3.jpg',
    './img/Thum_12-11.jpg',
    './img/Thum_12-18.jpg',
    './img/Thum_12-16.jpg',
    './img/Thum_12-15.jpg',
    './img/Thum_22-10.jpg',
    './img/Thum_122.jpg',
    './img/Thum_120-1.png'
  ]
  let texts = [
    '비오는 날 채색하는 <br>아름다운 협업',
    '셀피마니아를 위한 <br>특별한 포토존, 아트거울',
    '【내 작품 판매하기】<br>PB Labs의 첫번째 프로젝트를 소개합니다!',
    '우리집 미술관 <br>마스터피스의 생생한 감동',
    '호암재단이 선택한 <br>김환기의 40년 예술 여정',
    '프베랑 썸머, <br>LUCKY BOY EVENT',
    '다정한 시선이 흐트러지지 않게 <br>윤형택 개인전',
    '가장 밝은 세상에서 전하는 위로 <br>김제언 인터뷰',
    '빛의 모습에 따라 <br>달라지는 매력',
    'home sweet home! <br>그레타프리든',
    '체감온도 -5° 여름 인테리어 <br>100만원대 이하 에디션 추천',
  ]
  function getRandomPair(pairElement) {
    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];
    var randomText = texts[randomIndex];

    // 이미지와 텍스트를 이미 선택된 요소들과 비교하여 중복이면 재선택합니다.
    var existingPairs = document.getElementsByClassName("con-item");
    for (var i = 0; i < existingPairs.length; i++) {
      var imageElement = existingPairs[i].getElementsByClassName("randomImg")[0];
      var textElement = existingPairs[i].getElementsByClassName("randomText")[0];

      if (imageElement.src === randomImage || textElement.innerHTML === randomText) {
        return getRandomPair(pairElement); // 재귀적으로 재선택
      }
    }

    return {
      image: randomImage,
      text: randomText
    };
  }

  window.onload = function () {
    var pairs = document.getElementsByClassName("con-item");
    for (var i = 0; i < pairs.length; i++) {
      var pairElement = pairs[i];
      var pair = getRandomPair(pairElement);
      var imageElement = pairElement.getElementsByClassName("randomImg")[0];
      var textElement = pairElement.getElementsByClassName("randomText")[0];

      imageElement.src = pair.image;
      textElement.innerHTML = pair.text;
    }
  }


}
randomimage()

// 스와이퍼 인스턴스 생성 및 초기화
function swSlide() {
  /*   let nowIndex = document.querySelector('.slide-index')
    let slideLength = document.querySelector('.slide-length')
    let nextBt=querySelector('.swiper-button-next')
    let prevBt=querySelector('.swiper-button-prev') */
  const wish = document.getElementsByClassName('wish');
  const wishIcon = document.querySelectorAll('.wish i')
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    /* autoHeight:true, */
    breakpoints: {

      768: {
        slidesPerView: 2,  //브라우저가 768보다 클 때
        spaceBetween: 30,
      },
      968: {
        slidesPerView: 3,  //브라우저가 968보다 클 때
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 4,  //브라우저가 1400보다 클 때
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },

  });
  for (let i = 0; i < wishIcon.length; i++) {
    wishIcon[i].addEventListener("click", function () {
      wishIcon[i].classList.toggle('xi-heart-o')
      wishIcon[i].classList.toggle('xi-heart')

    })
  }
  // 스와이퍼 이동값 출력



  /* nowIndex.innerText = swiper.realIndex+1; */
  // 이동값 변경 및 업데이트


  /*    let slideBox = document.querySelector('.swiper-wrapper') 
    
    slideBox.style.transform = 'translate3d(0,0,0)';  */
}
swSlide()

//푸터인포
function footerinfo() {
  let footerBtn = document.getElementsByClassName('d-hidden')
  let mHedden = document.getElementsByClassName('m-hidden')
  for (let i = 0; i < footerBtn.length; i++) {
    footerBtn[i].addEventListener('click', function () {
      mHedden[i].classList.toggle('active');
      footerBtn[i].classList.toggle('active');
      console.log(i)
    })
  }
}
footerinfo()
