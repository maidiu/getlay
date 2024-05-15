const about = document.getElementById('about')
const art = document.getElementById('art')
const out = document.getElementById('out')
const invisibles = [art, out, about]
const buttonContainer = document.getElementById('button-container')
const fwl = document.getElementById('fwl')
const fnl = document.getElementById('froggo-and-logo')
const textContainer = document.getElementById('text-container')
const texts = [...document.querySelectorAll('.text')]
const textDivs = document.querySelectorAll('div.text')
const main = document.getElementById('main')

/*function fadeLogo() {
    // Apply the transition class
    
    fwl.src = "getlay.png"
    fwl.style.position = "fixed"
    fwl.style.top = '0'
    if (window.innerWidth < 800) {
    fwl.style.width = "75%";
    
    } else if (window.innerWidth > 799) {
    }
}*/

document.addEventListener('DOMContentLoaded', () => {
    console.log('1: still working')
    invisibles.forEach((invisible) => {
        if (invisible.classList.contains('hidden')) {
            invisible.classList.remove('hidden');
            invisible.classList.add('open-buttons');
           
            
        } else {
            invisible.classList.add('hidden');
            invisible.classList.remove('open-buttons');
            
    }
    })
})





const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
    console.log('clicked', event.target)})
})



menu.addEventListener('click', ()=> {
    invisibles.forEach((invisible) => {
        fwl.src = 'getlay.png'
        invisible.classList.remove('hidden')
        invisible.classList.add('open-buttons')
    })
    menu.classList.add('hidden')
    buttonContainer.classList.add('page-open')
    console.log('menu clicked')
    main.style.justifyContent = 'space-between'
    fnl.style.position = 'fixed'
    buttonContainer.style.position = 'fixed'
    buttonContainer.style.bottom = '0'
    texts[0].classList.remove('hidden')
    textContainer.style.display = 'flex'

    if (window.innerWidth < 800) {
        fnl.style.height = '15vh'
        fnl.style.width = 'auto';
    } else if (window.innerWidth > 799) {
        fwl.style.height = "19vh"
        fwl.style.width = 'auto'
    }
})

invisibles.forEach((invisible) => {
    invisible.addEventListener('click', () => {
        const buttonText = invisible.innerText.toLowerCase(); // Convert button text to lowercase
        textDivs.forEach((div) => {
            if (div.dataset.name === buttonText) { // Check if data-name matches button text
                div.classList.remove('hidden'); // Remove hidden class
            } else {
                div.classList.add('hidden'); // Add hidden class to other divs
            }
        });
    });
});





