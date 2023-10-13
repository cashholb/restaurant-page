import timelessCategoryImage from './assets/images/menu_images/amirali-mirhashemian-XtLPfib7OuM-unsplash.jpg';
import newAgeCategoryImage from './assets/images/menu_images/pexels-narda-yescas-1566837.jpg';

const navbarList = [
    'Home',
    'Menu',
    'Contact',
];

const homePageContent = {
    header: 'FAUX MAMA\'S PIZZA',
    underHeader: '700 E Pine St Seattle, Washington 98122',
}

const menuList = [
    {
        categoryTitle: 'timeless pies',
        image: timelessCategoryImage,
        items: [
            {
                title: 'Pepperoni',
                description: 'hand tossed dough | mozzarella | pepperoni',
            },
            {
                title: 'Caprese',
                description: 'olive oil | fresh basil | cherry tomatoes | mozzarella',
            },
            {
                title: 'Margherita',
                description: 'San Marzano tomatoes | mozzarella | fresh basil',
            },
            {
                title: 'Capricciosa',
                description: 'artichokes | mushrooms | olives | prosciutto | mozzarella',
            },
        ],
    },
    {
        categoryTitle: 'new age',
        image: newAgeCategoryImage,
        items: [
            {
                title: 'Mashed Potato',
                description: 'mashed potato | white pie | mozzarella | bacon',
            },
            {
                title: 'Vegan',
                description: 'red onion | mushroom | artichoke | argula | vegan cheese',
            },
            {
                title: 'Spicy Honey',
                description: 'jalapenos | pepperoni | hot honey',
            },
            {
                title: 'BBQ Chicken',
                description: 'BBQ chicken | pepperoni | pepperoncini | mozzarella',
            },
        ]
    },
];

const contactPageList = [
    {
        title: 'Hours',
        description: [
            'Sunday-Wednesday: 11am - 9pm',
            'Thursday-Saturday: 11am - 10pm',
        ],
    },
    {
        title: 'Address',
        description: [
            '700 E Pine St Seattle, Washington 98122',
        ],
    },
    {
        title: 'Contact',
        description: [
            'Phone: 123-456-7890',
            'Email: fauxmama@fakeemail.com',
        ],
    },
    {
        title: 'Credit',
        description: [
            'checkout the real resturant this is based on',
            {
                link: 'https://www.hot-mamaspizza.com/',
            },
            'checkout my github repository for credit and more',
        ],
    }
];

export {menuList, contactPageList, navbarList, homePageContent};

