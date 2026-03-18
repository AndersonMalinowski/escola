// Destacar link ativo no menu baseado na URL
const currentPath = window.location.pathname.split("/").pop();
document.querySelectorAll('nav a').forEach(link => {
    if(link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});
