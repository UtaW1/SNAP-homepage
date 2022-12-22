const navToggle = document.querySelector('.mobile-nav-toggle'); 
const primaryNav = document.querySelector('.primary-navigation');

const dropDownArrow = document.querySelector('.dropdown-down-arrow');  
const dropDownList = document.querySelector('.dropdown-list');

const dropDownArrow2 = document.querySelector('.dropdown-down-arrow-2')
const dropDownList2 = document.querySelector('.dropdown-list-2')


const toggle = () => {
    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded',false): navToggle.setAttribute('aria-expanded',true); 
    primaryNav.toggleAttribute('data-visible'); 
}

const toggleDropDown = () => {
    dropDownList.hasAttribute('dropdown-visible') ? dropDownArrow.setAttribute('data-dropdown',false): dropDownArrow.setAttribute('data-dropdown',true); 
    dropDownList.toggleAttribute('dropdown-visible');
}
const toggleDropDown2 = () => {
    dropDownList2.hasAttribute('dropdown-visible') ? dropDownArrow2.setAttribute('data-dropdown',false): dropDownArrow2.setAttribute('data-dropdown',true); 
    dropDownList2.toggleAttribute('dropdown-visible');
}


navToggle.addEventListener('click', toggle); 
dropDownArrow.addEventListener('click',toggleDropDown);
dropDownArrow2.addEventListener('click',toggleDropDown2); 



