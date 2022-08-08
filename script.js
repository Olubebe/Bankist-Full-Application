const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// Selecting elements
console.log(document.documentElement)
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header')
const allSection = document.querySelectorAll('.section')
console.log(allSection);

document.getElementById('section--1')
const allButtons = document.getElementsByTagName('button')
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookie for improved functionality and analytics.'
message.innerHTML = 'We use cookie for improved functionality and analytics. <button class="btn btn--close-cookie"> Got It!</button>';
// header.prepend(message)
header.append(message)
    // header.append(message.cloneNode(true))

// header.before(message)
header.after(message);
// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
    message.remove();
})

// styles
message.style.backgroundColor = '#37383d'
message.style.width = '120%'
console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);

message.style.height =
    Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'

document.documentElement.style.setProperty('--color-primary', 'orangered')

// Attribute
const logo = document.querySelector('.nav__logo')
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo'

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Banlist')

console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn')
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
console.log(logo.CDATA_SECTION_NODE.versionNumber);

// Classes
logo.classList.add('e')
logo.classList.remove('e')
logo.classList.toggle('e')
logo.classList.contains('e') // not includes

// Don't use 
logo.className = 'jonas'