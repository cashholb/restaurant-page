
const navbar = () => {
    let contentDiv = document.querySelector('.content');

    // navbar
    const navbarDiv = document.createElement('div');
    navbarDiv.classList.add('navbar');

    const unorderedList = document.createElement('ul');
    let l1 = document.createElement('li');
    l1.textContent = 'Home';
    let l2 = document.createElement('li');
    l2.textContent = 'Menu';
    let l3 = document.createElement('li');
    l3.textContent = 'Contact';
    unorderedList.appendChild(l1);
    unorderedList.appendChild(l2);
    unorderedList.appendChild(l3);
    navbarDiv.appendChild(unorderedList);

    contentDiv.appendChild(navbarDiv);
}

export {navbar};