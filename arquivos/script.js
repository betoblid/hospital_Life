function menu () {
    let menu = document.getElementById('mobile')

    if(menu.classList.contains('on')){
        menu.classList.remove('on')
       menu.classList.add('off')
    }else{
        menu.classList.remove('off')
        menu.classList.add('on')
    }
}