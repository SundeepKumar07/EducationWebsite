// Use '.' for class selectors and '#' for ID selectors
burger = document.querySelector('.burger'); // If 'burger' is a class
navbar = document.querySelector('.navbar'); // If 'navbar' is a class
navList = document.querySelector('.navList'); // If 'navList' is a class
search = document.querySelector('.search'); // If 'search' is a class

// Add event listener to burger element
burger.addEventListener('click', () => {
    navList.classList.toggle('v_class_resp');     
    search.classList.toggle('v_class_resp');   
    navbar.classList.toggle('h_nav_resp');  
});
