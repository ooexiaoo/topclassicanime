window.onload = function(){
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click',function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })
}



function pic() {
    var bgm = ['https://w.wallhaven.cc/full/y8/wallhaven-y8kjek.jpg',
    'https://w.wallhaven.cc/full/76/wallhaven-76levy.jpg',
    'https://w.wallhaven.cc/full/jx/wallhaven-jx8p1y.png',
    'https://w.wallhaven.cc/full/39/wallhaven-39ezz6.jpg',
    'https://w.wallhaven.cc/full/j3/wallhaven-j36mw5.png',
    'https://w.wallhaven.cc/full/v9/wallhaven-v91775.jpg',
    'https://w.wallhaven.cc/full/qz/wallhaven-qz99mq.png',
    'https://w.wallhaven.cc/full/ox/wallhaven-oxd3e7.png'];
 
    $('body').css({
        'background' : 'url('+ bgm[Math.floor(Math.random() * bgm.length)] + ') no-repeat',
    });
}
pic();