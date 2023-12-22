const dishes = [
  {
    name: 'Spaghetti Bolognese',
    img: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    timeToPrepare: '30 minutes',
    ingredients: [
      '1 lb ground beef',
      '1 onion, finely chopped',
      '2 cloves garlic, minced',
      '1 carrot, grated',
      '1 can (28 oz) crushed tomatoes',
      '2 tbsp tomato paste',
      'Spices (oregano, basil, salt, pepper)',
      '1 lb spaghetti',
      'Parmesan cheese (for the sprinkle)',
    ],
    listOfSteps: [
      "Cook beef till it's happy and brown.",
      'Add veggie friends (onion, garlic, carrot) and chat until softened.',
      'Pour in the tomato party (crushed, paste, and spices). Simmer for 15-20 mins.',
      'Boil spaghetti - they love a hot bath.',
      'Top spaghetti with the saucy dance and Parmesan confetti. Enjoy your Italian fiesta!',
    ],
    cuisine: 'Italian',
    favorite: true,
  },
  {
    name: 'Chicken Caesar Salad',
    img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    timeToPrepare: '20 minutes',
    ingredients: [
      '2 chicken breasts',
      'Salt, pepper, olive oil',
      'Romaine lettuce',
      'Cherry tomatoes (halved)',
      'Croutons (for the crunch)',
      'Parmesan cheese (grated)',
      'Caesar dressing',
    ],
    listOfSteps: [
      'Season chicken - make it feel special. Cook until it sings in olive oil.',
      'Mix lettuce, tomato buddies, croutons, and Parmesan in a salad disco.',
      'Invite sliced chicken to the party.',
      'Drizzle Caesar dressing - let them dance together. Serve with extra Parmesan glam.',
    ],
    cuisine: 'Mediterranean',
    favorite: false,
  },
  {
    name: 'Vegetarian Stir-Fry',
    img: 'https://t3.ftcdn.net/jpg/01/04/13/56/360_F_104135636_bH0l3ScKrNedCikbIsEgR49I6phhpzuH.jpg',
    timeToPrepare: '25 minutes',
    ingredients: [
      'Veggies (broccoli, bell pepper, carrot, snap peas)',
      'Firm tofu (cubed)',
      'Soy sauce, sesame oil, hoisin sauce',
      'Garlic (minced), ginger (grated)',
      'Cooked rice (for the chill spot)',
    ],
    listOfSteps: [
      'Heat sesame oil in the wok - make it sizzle.',
      'Saute garlic and ginger - let the aromatherapy begin.',
      'Stir-fry golden tofu - they like a tan.',
      'Add veggies to the wok - make it a colorful stir-fry carnival.',
      'Sauce it up (soy and hoisin) - let them mingle. Serve over rice and find your inner peace.',
    ],
    cuisine: 'Asian',
    favorite: true,
  },
  {
    name: 'Chicken BBQ',
    img: 'https://www.thechunkychef.com/wp-content/uploads/2021/09/Lemon-Herb-Grilled-Chicken-feat.jpg',
    timeToPrepare: '25 minutes',
    ingredients: [
      '4 chicken breasts',
      'Salt, pepper, olive oil',
      '2 lemons (zested, juiced)',
      'Garlic (minced)',
      'Dried herbs (thyme, rosemary, oregano)',
      'Fresh parsley (for the fancy touch)',
    ],
    listOfSteps: [
      "Heat up the grill - it's BBQ time!",
      'Season chicken - make it flavor-packed.',
      'Whisk lemony goodness and brush the chicken - give it a citrus hug.',
      'Grill for a hot date - 6-8 mins per side.',
      'Garnish with parsley - because every chicken deserves a fresh makeover.',
    ],
    cuisine: 'Mediterranean',
    favorite: false,
  },
];

export default dishes;
