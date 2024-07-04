function menuShow(params) {
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        
    }
        
    else{
        menuMobile.classList.add('open');
    }
    
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const myslide = document.querySelectorAll('.myslider'),
    dot = document.querySelectorAll('.dot');

let timer = setInterval(autoslide, 8000);
slidefun(c);
function autoslide(){
    c += 1;
    slidefun(c);
}
function plusSlides(n){
    c += n;
    slidefun(c);
    resetTimer();
}
function currentSlide(n){
    c = n;
    slidefun(c);
    resetTimer();
}
function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}
function slidefun(n){
    let = i;
    for(i=0; i<myslide.length;i++)
        myslide[i].style.display = "none";
    for(i=0; i<dot.length;i++)
        dot[i].classList.remove('active');
    if(n > myslide.length)
        c = 1;
    if(n<1){c=myslide.length;}
    myslide[c - 1].style.display = "block";
    dot[c - 1].classList.add('active')

}

//login

function validarCampo(){
    const emailValido = isEmailValid();
    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disable = !emailValido || !passwordValid;

}
function isEmailValid(){
    const email = document.getElementById('email').value;
    if(!email)
        return false;
    return validarEmail(email);
}
function isPasswordValid(){
    const password = document.getElementById('password').value;
    if(!password)
        return false;
    return true;
}
function validarEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}


