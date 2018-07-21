// // $(document).ready(function(){
//   $(document).keyup(function (e) {
//     if (e.keyCode === 27) {
//       $('.grid').toggleClass('grid-show');
//     }
//   });
// // });


var viewport = window.matchMedia('(max-width: 999px)');
  if(viewport.matches){  //뷰포트에 있는 값이 매칭되면
    var nav = $('.navigation');  //네비게이션에 있는
    var menu = $('.menu');
    var btn = $('<button class="btn-menu" aria-label="메인 메뉴 열기"></button>');  //버튼을 클릭하면 열기 닫기로 버튼모양 만들어라
    var bar_top = $('<span class="menubar menubar-top"></span>');
    var bar_middle = $('<span class="menubar menubar-middle"></span>');
    var bar_bottom = $('<span class="menubar menubar-bottom"></span>');
    var item = $('.menu > li');
    var text = $('.menu-item-text');  //아이콘 폰트



    btn.append(bar_top, bar_middle, bar_bottom);
    nav.prepend(btn);
    item.addClass('menu-item');
    item.attr('tabindex','0');  //키보드 접근 가능, 탭버튼 누르면 이동 
    text.addClass('icon-plus');  //아이콘 폰트

    btn.click(function(){
      $(this).toggleClass('btn-menu-act');  //메뉴 열고 닫고 실행해라
      menu.toggleClass('menu-act');  
      if($(this).hasClass('btn-menu-act')){   // 버튼 누를때
          $(this).attr('aria-label','메인 메뉴 닫기')  // 메뉴 닫기라고 보여줘라
      }else{
          $(this).attr('aria-label', '메인 메뉴 열기')  // 다시 눌렀을 때 메뉴 열기라고 보여줘라 
      }
    });

    item.on('click keyup', function(e){  // 키보드 접근 가능하도록, 탭키를 누르면 메뉴로 이동해라
      if (e.type === 'click' || e.keyCode === 13 || e.keyCode === 32){  //이벤트 타입이 클릭일 때 엔터(키코드13)를 누르거나 스페이스바(키코드32)를 누르면 토글 메뉴가 열려라
        item.removeClass('menu-item-act');
        $(this).addClass('menu-item-act');
        if($(this).hasClass('menu-item-act')){
          text.removeClass('icon-minus').addClass('icon-plus');   //아이콘 폰트가 선택되면 플러스가 마이너스로 바뀌기
          $(this).find(text).addClass('icon-minus').removeClass('icon-plus');   
        }
      }      
     });

    menu.focusin(function(){
      btn.addClass('btn-menu-act');      
      menu.addClass('menu-act');
     });

    menu.focusout(function(){
      btn.removeClass("btn-menu-act");     
      menu.removeClass('menu-act');
     });
   }
