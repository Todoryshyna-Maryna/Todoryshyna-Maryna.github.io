function changeSidebarHeight() {
    if (window.outerWidth < 1460 && window.outerWidth >= 1328) {
        document.querySelector('.sidebar').style.height = (document.body.offsetHeight - 318) + 'px';
    } else if (window.outerWidth >= 1460) {
        document.querySelector('.sidebar').style.height = (document.body.offsetHeight - 122) + 'px';
    } else if (window.outerWidth < 1328){
        document.querySelector('.sidebar').style.height = '';
       return;
    }
}

changeSidebarHeight();
