import express from 'express';

const router = express.Router();

const dishes = [
  {
    name: 'Spaghetti Bolognese',
    timeToPrepare: '30 minutes',
    ingredients: [
      '1 lb ground beef',
      '1 onion, finely chopped',
      '2 cloves garlic, minced',
      '1 carrot, grated',
      '1 can (28 oz) crushed tomatoes',
      '2 tablespoons tomato paste',
      '1 teaspoon dried oregano',
      '1 teaspoon dried basil',
      'Salt and pepper to taste',
      '1 lb spaghetti',
      'Grated Parmesan cheese for serving',
    ],
    steps: [
      'Cook ground beef until browned; drain excess fat.',
      'Add chopped onion, minced garlic, and grated carrot. Cook until veggies are softened.',
      'Stir in crushed tomatoes, tomato paste, oregano, basil, salt, and pepper. Simmer for 15-20 minutes.',
      'Cook spaghetti according to package instructions; drain.',
      'Serve Bolognese sauce over cooked spaghetti. Sprinkle with grated Parmesan cheese.',
    ],
  },
  {
    name: 'Chicken Caesar Salad',
    timeToPrepare: '20 minutes',
    ingredients: [
      '2 boneless, skinless chicken breasts',
      'Salt and pepper to taste',
      '1 tablespoon olive oil',
      '1 head romaine lettuce, chopped',
      '1 cup cherry tomatoes, halved',
      '1/2 cup croutons',
      '1/2 cup grated Parmesan cheese',
      'Caesar dressing',
    ],
    steps: [
      'Season chicken breasts with salt and pepper. Cook in olive oil until fully cooked; slice into strips.',
      'Combine chopped romaine lettuce, cherry tomatoes, croutons, and Parmesan cheese in a large bowl.',
      'Add sliced chicken to the salad.',
      'Drizzle Caesar dressing over the salad and toss to coat evenly.',
      'Serve immediately, optionally with additional Parmesan on top.',
    ],
  },
  {
    name: 'Vegetarian Stir-Fry',
    timeToPrepare: '25 minutes',
    ingredients: [
      '1 cup broccoli florets',
      '1 bell pepper, thinly sliced',
      '1 carrot, julienned',
      '1 cup snap peas',
      '1 block firm tofu, cubed',
      '3 tablespoons soy sauce',
      '2 tablespoons sesame oil',
      '1 tablespoon hoisin sauce',
      '2 cloves garlic, minced',
      '1 teaspoon ginger, grated',
      'Cooked rice for serving',
    ],
    steps: [
      'Heat sesame oil in a wok or large skillet over medium-high heat.',
      'Add minced garlic and grated ginger; sauté for 1-2 minutes until fragrant.',
      'Add tofu cubes; stir-fry until golden brown.',
      'Add broccoli, bell pepper, carrot, and snap peas to the wok. Stir-fry for 5-7 minutes until vegetables are tender-crisp.',
      'Mix soy sauce and hoisin sauce in a small bowl. Pour over vegetables and tofu, tossing to combine.',
      'Serve stir-fry over cooked rice. Adjust seasoning if necessary. Enjoy!',
    ],
  },
  {
    name: 'Grilled Lemon Herb Chicken',
    timeToPrepare: '25 minutes',
    ingredients: [
      '4 boneless, skinless chicken breasts',
      'Salt and pepper to taste',
      '2 tablespoons olive oil',
      '2 lemons (zested and juiced)',
      '3 cloves garlic, minced',
      '1 teaspoon dried thyme',
      '1 teaspoon dried rosemary',
      '1 teaspoon dried oregano',
      'Fresh parsley for garnish',
    ],
    steps: [
      'Preheat the grill to medium-high heat.',
      'Season chicken breasts with salt and pepper; set aside.',
      'In a small bowl, whisk together olive oil, lemon zest, lemon juice, minced garlic, thyme, rosemary, and oregano.',
      'Brush the lemon herb mixture over both sides of the chicken breasts.',
      'Grill the chicken for 6-8 minutes per side or until fully cooked.',
      'Garnish with fresh parsley and serve hot.',
    ],
  },
];

router.get('/', (req, res) => {
  console.log(dishes);
  res.send(dishes);
});

export default router;
