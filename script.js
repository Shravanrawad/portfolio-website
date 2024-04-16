const tabcontainer = document.querySelector('.about-tabs'),
aboutsection = document.querySelector('.about-section');

tabcontainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('tab-item') && !e.target.classList.contains('active')){
        tabcontainer.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        const target = e.target.getAttribute('data-target');
        aboutsection.querySelector('.tab-content.active').classList.remove('active');
        aboutsection.querySelector(target).classList.add('active');
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('view-project-btn')){
        togglepopup();
        itemdetails(e.target.parentElement);
    }
})

function togglepopup(){
    document.querySelector('.portfolio-popup').classList.toggle('open');
    document.body.classList.toggle('hide-scrolling');
    document.querySelector('.main').classList.toggle('fade-out');
}

document.querySelector('.pp-close').addEventListener('click', togglepopup);

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('pp-inner')){
        togglepopup();
    }
})

function itemdetails(item){
     document.querySelector('.pp-thumbnail img').src = 
     item.querySelector('.portfolio-item-thumbnail img').src;

     document.querySelector('.pp-header h3').innerHTML = 
     item.querySelector('.portfolio-item-title').innerHTML;

     document.querySelector('.pp-body').innerHTML =
     item.querySelector('.portfolio-item-details').innerHTML;
}


const navtoggler  = document.querySelector('.nav-toggler');
navtoggler.addEventListener('click', () => {
    hidesec();
    shownav();
    document.body.classList.toggle("hide-scrolling"); 
})

function hidesec(){
    document.querySelector('section.active').classList.toggle('fade-out');
}

function shownav(){
    document.querySelector('.header').classList.toggle('active')
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('link-item') && e.target.hash != ""){
        navtoggler.classList.add('hide')
        if(e.target.classList.contains('nav-item')){
            shownav();
        }
        else {
            hidesec();
        }
        setTimeout(()=>{
            document.querySelector('section.active').classList.remove('active', 'fade-out');
            document.querySelector(e.target.hash).classList.add('active');
            window.scrollTo(0,0);
            document.body.classList.remove('hide-scrolling');
            navtoggler.classList.remove('hide');
        }, 500)
    }
})