window.addEventListener("scroll", function(){
    let div = this.document.querySelector('.menu')
    div.classList.toggle('rolagem', window.scrollY > 0)
})