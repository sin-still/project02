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

    loginBtn.addEventListener('click', function () {
        loginBg.classList.add('active')
        loginPage.classList.add('active')
    })
    loginBg.addEventListener('click', function () {
        loginBg.classList.remove('active')
        loginPage.classList.remove('active')
    })
    mLoginPageBt.addEventListener('click', function () {
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


signUp()
function signUp() {
    let $idArea = document.getElementById('idArea');
    let $pwArea = document.getElementById('pwArea');
    let $pwArea2 = document.getElementById('pwArea2');
    let $nameArea = document.getElementById('nameArea');
    let $adrArea1 = document.getElementById('adrArea1');
    let $adrArea2 = document.getElementById('adrArea2');
    let $phoneArea1 = document.getElementById('phoneArea1');
    let $phoneArea2 = document.getElementById('phoneArea2');
    let $emailArea = document.getElementById('emailArea');
    let $birthArea = document.getElementById('birthArea');

    let $terms1 = document.getElementById('terms-check1');
    let $terms2 = document.getElementById('terms-check2');

    let $idMes = document.getElementById('idMes');
    let $pwMes = document.getElementById('pwMes');
    let $pwMes2 = document.getElementById('pwMes2');
    let $nameMes = document.getElementById('nameMes');
    let $adrMes = document.getElementById('adrMes');
    let $phoneMes = document.getElementById('phoneMes');
    let $emailMes = document.getElementById('emailMes');
    let $birthMes = document.getElementById('birthMes');

    const signBt = document.getElementById('signUp-summit')

    const idRule = /^[a-z0-9]{4,16}$/;
    const pwRule = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^])[a-zA-Z\d!@#$%^]{8,16}$/;
    const nameRule = /^[A-Za-z가-힣]{1,20}$/;
    const adrRule = /^\d{5}$/;
    //const phoneRule = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
    const phoneRule1 = /^\d{3,4}$/;
    const phoneRule2 = /^\d{4}$/;
    const emailRule = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const birthRule = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;

    $idArea.addEventListener('blur', function () {
        if (idRule.test($idArea.value)) {
            $idMes.innerHTML = '사용가능한 아이디 입니다';
            $idMes.style.color = 'green';
        } else {
            if ($idArea.value == '') {
                $idMes.innerHTML = '아이디를 입력해주세요.';
                $idMes.style.color = 'red';
            } else {
                $idMes.innerHTML = '아이디는 영문소문자/숫자 4글자 이상 가능합니다.';
                $idMes.style.color = 'red';
            }

        }
    })
    $pwArea.addEventListener('blur',function(){
        if(pwRule.test($pwArea.value)){
            $pwMes.innerHTML='사용가능한 비밀번호 입니다';
            $pwMes.style.color='green';
        }else{
            if ($pwArea.value == '') {
                $pwMes.innerHTML = '비밀번호를 입력해주세요.';
                $pwMes.style.color = 'red';
            } else {
                $pwMes.innerHTML='비밀번호는 특수문자,문자,숫자 포함하고 8자이상 16자미만의 값만 사용 가능';
                $pwMes.style.color='red';
            }
        }
    })
    $pwArea2.addEventListener('blur',function(){
        if(($pwArea.value == $pwArea2.value) && (!$pwArea2.value == '') && pwRule.test($pwArea.value)){
            $pwMes2.innerHTML='일치하는 비밀번호입니다.'
            $pwMes2.style.color='green';
        }else{
            if(($pwArea.value == '') || ($pwArea2.value == '')) {
                $pwArea.focus();
                $pwArea2.value='';
                $pwMes2.innerHTML='비밀번호를 입력하세요.'
                $pwMes2.style.color='red';
            }else if(!pwRule.test($pwArea.value)){
                $pwMes2.innerHTML='비밀번호를 확인하세요.'
                $pwMes2.style.color='red';
                $pwArea.focus()
            }else{
                $pwMes2.innerHTML='비밀번호가 일치하지 않습니다.'
                $pwMes2.style.color='red';
                $pwArea2.value=''
                $pwArea2.focus()
    
            }
        }
    })
    $nameArea.addEventListener('blur',function(){
        if (nameRule.test($nameArea.value)) {
          $nameMes.innerHTML=''  
        }else{
            if($nameArea.value ==''){
                $nameMes.innerHTML='이름을 입력해주세요.'
                $nameMes.style.color='red';
            }else{
                $nameMes.innerHTML='이름을 확인해주세요.'
                $nameMes.style.color='red';
                $nameArea.value=''
                $nameArea.focus()
            }
            
        }
    })
    $adrArea1.addEventListener('blur',function(){
        if (adrRule.test($adrArea1.value)) {
          $adrMes.innerHTML=''  
        }else{
            if($adrArea1.value ==''){
                $adrMes.innerHTML='우편번호를 입력해주세요.'
                $adrMes.style.color='red';
            }else{
                $adrMes.innerHTML='우편번호을 확인해주세요.'
                $adrMes.style.color='red';
                $adrArea1.value=''
                $adrArea1.focus()
            }
            
        }
    })
    $adrArea2.addEventListener('blur',function(){
        if (!$adrArea2.value =='') {
          $adrMes.innerHTML=''  
        }else{
            $adrMes.innerHTML='주소를 입력해주세요.'
            $adrMes.style.color='red'; 
        }
    })
    $phoneArea1.addEventListener('blur',function(){
        if (phoneRule1.test($phoneArea1.value)) {
          $phoneMes.innerHTML=''
        }else{
            if($phoneArea1.value ==''){
                $phoneMes.innerHTML='핸드폰 번호를 입력해주세요.'
                $phoneMes.style.color='red';
            }else{
                $phoneMes.innerHTML='핸드폰 번호을 확인해주세요.'
                $phoneMes.style.color='red';
                $phoneArea1.value=''
                $phoneArea1.focus()
            }
            
        }
    })
    $phoneArea2.addEventListener('blur',function(){
        if (phoneRule2.test($phoneArea2.value)) {
          $phoneMes.innerHTML=''
        }else{
            if($phoneArea2.value ==''){
                $phoneMes.innerHTML='핸드폰 번호를 입력해주세요.'
                $phoneMes.style.color='red';
            }else{
                $phoneMes.innerHTML='핸드폰 번호를 확인해주세요.'
                $phoneMes.style.color='red';
                $phoneArea2.value=''
                $phoneArea2.focus()
            }
            
        }
    })
    $emailArea.addEventListener('blur',function(){
        if (emailRule.test($emailArea.value)) {
          $emailMes.innerHTML=''
        }else{
            if($emailArea.value ==''){
                $emailMes.innerHTML='이메일을 입력해주세요.'
                $emailMes.style.color='red';
            }else{
                $emailMes.innerHTML='이메일을 확인해주세요.'
                $emailMes.style.color='red';
                $emailArea.value=''
                $emailArea.focus()
            }
            
        }
    })
    $birthArea.addEventListener('blur',function(){
        if (birthRule.test($birthArea.value)) {
          $birthMes.innerHTML=''
        }else{
            if($emailArea.value ==''){
                $birthMes.innerHTML='생년월일을 입력해주세요.'
                $birthMes.style.color='red';
            }else{
                $birthMes.innerHTML='생년월일을 확인해주세요.'
                $birthMes.style.color='red';
                $birthArea.value=''
                $birthArea.focus()
            }
            
        }
    })
    const allCheck = document.getElementById('allCheck');

    // 나머지 체크박스 요소들을 가져옵니다.
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:not(#allCheck)');
    
    // #allCheck 체크박스의 변경 이벤트 리스너를 추가합니다.
    allCheck.addEventListener('change', function() {
      // #allCheck 체크박스의 상태에 따라 나머지 체크박스들의 상태를 변경합니다.
      checkboxes.forEach(function(checkbox) {
        checkbox.checked = allCheck.checked;
      });
    });
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
          // 체크박스 중 하나라도 체크가 안된 경우 allCheck 체크를 해제합니다.
          if (!this.checked) {
            allCheck.checked = false;
          }
        });
    });

    signBt.addEventListener('click', function (event) {
        event.preventDefault(); // 기본 동작(페이지 이동)을 막습니다.
    
        // 모든 유효성 검사를 확인합니다.
        if (
          idRule.test($idArea.value) &&
          pwRule.test($pwArea.value) &&
          $pwArea.value === $pwArea2.value &&
          nameRule.test($nameArea.value) &&
          adrRule.test($adrArea1.value) &&
          $adrArea2.value !== '' &&
          phoneRule1.test($phoneArea1.value) &&
          phoneRule2.test($phoneArea2.value) &&
          emailRule.test($emailArea.value) &&
          birthRule.test($birthArea.value) &&
          $terms1.checked &&
          $terms2.checked
        ) {
          // 모든 유효성 검사가 통과된 경우 회원가입 완료 얼럿 창을 띄웁니다.
          alert('회원가입이 완료되었습니다.');
          window.location.href = '../index.html';
        } else {
          // 유효성 검사에 실패한 항목이 있는 경우 오류 메시지를 표시하고 폼 제출을 막습니다.
          alert('빈 항목이 있는지 확인해주세요.');
          
        }
      });
}  