function showSidebar() {
    const Sidebar = document.querySelector('.sidebar')
    Sidebar.style.display = 'flex'
}

function hideSidebar(){
    const Sidebar = document.querySelector('.sidebar')
    Sidebar.style.display = 'none'
}

const navbar = document.querySelector("nav");
    const navOffset = navbar.offsetTop;

    window.addEventListener("scroll", () => {
        if (window.scrollY > navOffset) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });