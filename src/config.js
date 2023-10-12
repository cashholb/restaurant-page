

const menuItem = (title, description) => {
    return {title, description};
}

const menuCategory = (title, image, items) => {
    return {title, image, items};
}

const menuList = [
    menuCategory(
        'timeless pies',
        'menu_images/amirali-mirhashemian-XtLPfib7OuM-unsplash.jpg',
        [
            menuItem(
                'Pepperoni',
                'hand tossed dough | mozzarella | pepperoni',
            ),
            menuItem(
                'Caprese',
                'olive oil | fresh basil | cherry tomatoes | mozzarella',
            ),
            menuItem(
                'Margherita',
                'San Marzano tomatoes | mozzarella | fresh basil',
            ),
            menuItem(
                'Capricciosa',
                'artichokes | mushrooms | olives | prosciutto | mozzarella',
            ),
        ],
    ),
    menuCategory(
        'new age pies',
        'menu_images/pexels-narda-yescas-1566837.jpg',
        [
            menuItem(
                'Mashed Potato',
                'mashed potato | white pie | mozzarella | bacon',
            ),
            menuItem(
                'Vegan',
                'red onion | mushroom | artichoke | argula | vegan cheese',
            ),
            menuItem(
                'Spicy Honey',
                'jalapenos | pepperoni | hot honey',
            ),
            menuItem(
                'BBQ Chicken',
                'BBQ chicken | pepperoni | pepperoncini | mozzarella',
            ),
        ],
    ),
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

export {menuList, contactPageList};

