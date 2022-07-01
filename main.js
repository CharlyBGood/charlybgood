
// document.body.style.backgroundImage = "url(./img/JAHJAH.gif)";

// Create e custom class that works as HTML template 
class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="topnav" id="nav-bar">
            <a class="nav-link_1" href="./index.html">
                <img class="header-logo" src="../img/headerlogo.png" alt="">
            </a>
            <a class="nav-link_2" href="../pages/contact.html">contact</a>
        </nav>
        `
    }
}

customElements.define('my-nav', MyNavbar);

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="smedia">
              <a href="https://bit.ly/BGoodYouTube" target="_blank">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="https://github.com/CharlyBGood" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://vimeo.com/charlybgood" target="_blank">
                <i class="fab fa-vimeo-v"></i>
              </a>
              <a href="https://www.instagram.com/charlsbgood/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/CharlybGoodM" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </footer>
        `
    }
}

customElements.define('my-footer', MyFooter);
