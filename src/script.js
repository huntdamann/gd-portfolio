
//Function to transition for fade in of elements on intial page load
window.onload = function() {
    document.querySelector('.hero-lead').classList.add('visible');
    document.querySelector('.call-to-action').classList.add('visible');
    document.querySelector('.main').classList.add('animate');
    document.querySelector('.logo-container').classList.add('animate');

}


const burger = document.querySelector('#burger');
const menu = document.querySelector('.menu');
const rightBrush = document.querySelector('#brush');
const target = document.querySelector('.foot');
const bottom = document.querySelector('.bottom');



const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
};

const callback = (entries, observer) => {
    entries.forEach((entry) => {
      
        if (entry.isIntersecting) {
            console.log(entry);
            entry.target.classList.add('animate-1');

        }
        
    })
}
const observer = new IntersectionObserver(callback, options);

observer.observe(target)



burger.addEventListener('click', () => {

    menu.classList.toggle('show');
    
    rightBrush.classList.add('brushMenu');
    bottom.classList.toggle('show');

    setTimeout(function() {

        const links = document.querySelector('.links');
        links.classList.toggle('animate');
        
    }, 20); //5 seconds

})