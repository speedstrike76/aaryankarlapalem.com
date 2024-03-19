const currentPage = window.location.pathname;
const links = document.querySelectorAll('navbar').

forEach(link => {
    if(link.href.includes(currentPage)) {
        link.classList.add('active');
    }
});