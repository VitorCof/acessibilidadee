class MobileNavBar{
    constructor(mobileMenu, nav, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.nav = document.querySelector(nav);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    aniateLinks(){
        this.navLinks.forEach((link) =>{
         link.style.animation
         ? (link.style.animation = "")
         : (link.style.animation = 'navLinksFade 0.5s ease forwards 0.3s');
        });
        
    }

    handleClick(){
        this.nav.classList.toggle(this.activeClass);
        this.aniateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    
    init() {
        if (this.mobileMenu){
            this.addClickEvent();
        }
       return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav",
    ".nav li",
);
mobileNavBar.init();

