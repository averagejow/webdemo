interface Card {
    source: string,
    name: string,
    details: string
}

interface InputDetails {
    name: string, 
    type: string,
    placeholder?: string
}


export const myNavMenu = ["Home", "Menu", "About Us"]

export const myHomeText = "All day buffet by Maica's Kitchen"

export const myCarouselImage = [
    "https://images.pexels.com/photos/4768962/pexels-photo-4768962.jpeg",
    "https://images.pexels.com/photos/34307854/pexels-photo-34307854.jpeg",
    "https://images.pexels.com/photos/4005229/pexels-photo-4005229.jpeg",
    "https://images.pexels.com/photos/7245469/pexels-photo-7245469.jpeg",
    "https://images.pexels.com/photos/35247187/pexels-photo-35247187.jpeg",
    "https://images.pexels.com/photos/29086309/pexels-photo-29086309.jpeg"
]

export const colorIds = [
    '#F3E9DC',
    '#C08552',
    '#5E3023',
    '#895737',
]

export const myInputData = [
    [ "name", "text", "Full Name"],
    [ "contact", "number", "Contact number"],
    [ "email", "email", "Email address"],
    [ "guest", "number", "Number of guest(s)"],
]

export const myInputData1: InputDetails[] = [
    {   
        name: "name",
        type: "input",
        placeholder: "Fullname"
    },

    {
        name: "contact",
        type: "input",
        placeholder: "Contact number"
    },

    {
        name: "guest",
        type: "input",
        placeholder: "No. of guest(s)"
    },

    {
        name: "date",
        type: "date",
        placeholder: "Date"
    }
]

export const myCardData: Card[] = [
    {
        source:     "https://images.pexels.com/photos/38602965/pexels-photo-38602965.jpeg",
        name:       "Barbecue",
        details:    "Freshly grilled barbecue, featuring juicy, charred meat glazed with a rich, smoky sauce.",
    },

    {
        source:     "https://images.pexels.com/photos/34034720/pexels-photo-34034720.jpeg",
        name:       "Meat Bites",
        details:    "A savory meat-inspired cocktail with rich, smoky flavors, balanced by a touch of spice and sweetness.",
    },

    {
        source:     "https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg",
        name:       "Egg bread",
        details:    "A delicious egg sandwich made with perfectly boiled eggs, fresh bread, and savory sauce.",
    },

    {
        source:     "https://images.pexels.com/photos/8739109/pexels-photo-8739109.jpeg",
        name:       "Filipino Sausage",
        details:    "A classic Filipino meatloaf made with seasoned ground pork, eggs, vegetables, and savory fillings, rolled and steamed to perfection."
    },

    {
        source:     "https://images.pexels.com/photos/24513338/pexels-photo-24513338.jpeg",
        name:       "Fresh Pizza",
        details:    "A delicious pizza topped with flavorful ingredients, melted cheese, and a golden, crispy crust."
    },

    {
        source:     "https://images.pexels.com/photos/15010285/pexels-photo-15010285.jpeg",
        name:       "Juicy Burger",
        details:    "A juicy, flavorful burger made with a savory patty, fresh vegetables, melted cheese, and soft toasted buns."
    },

    {
        source:     "https://images.pexels.com/photos/7364105/pexels-photo-7364105.jpeg",
        name:       "Buttered Lobster",
        details:    "Succulent lobster cooked to perfection, offering tender, juicy meat with a rich, buttery flavor."
    },

    
    {
        source:     "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
        name:       "Fresh Sushi",
        details:    "Fresh and flavorful sushi made with seasoned rice, delicate seafood, and savory toppings. Light, delicious, and beautifully prepared."
    }
]



