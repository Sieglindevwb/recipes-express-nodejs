import express from 'express';
import dishes from './dishes.js';
import dotenv from 'dotenv';
import checkKey from './middlewear.js';
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// app.use('/dishes', dishesRoutes);
//Routes
app.get('/', (req, res) => {
  console.log('Website is working!');
  res.send({
    code: 200,
    msg: 'Welcome to the Recipe API. Use specific routes for dishes and /info for instructions.',
  });
});

app.get('/info', (req, res) => {
  const infoMessage =
    '<p>See all recipes with this URL: <a href="http://localhost:3000/dishes">http://localhost:3000/dishes</a></p>' +
    '<p>You can also search for one dish by typing: <a href="http://localhost:3000/dishes/Spaghetti Bolognese">http://localhost:3000/dishes/Spaghetti Bolognese</a></p>' +
    '<p>Search for the steps needed to make the dish: <a href="http://localhost:3000/dishes/Spaghetti Bolognese/listOfSteps">http://localhost:3000/dishes/Spaghetti Bolognese/listOfSteps</a></p>';

  res.send(infoMessage);
});

app.get('/dishes', checkKey, (req, res) => {
  res.send(dishes);
});

app.get('/dishes/:name', (req, res) => {
  console.log(req.params.name);
  const dishName = req.params.name;
  const dish = dishes.find((dish) => dish.name === dishName);

  if (typeof dish === 'undefined') {
    return res.status(404).json({ error: 'Dish not found' });
  }
  res.json(dish);
});

app.get('/dishes/:name/listOfSteps', (req, res) => {
  const dishName = req.params.name;
  const dish = dishes.find((dish) => dish.name === dishName);

  if (typeof dish === 'undefined') {
    return res.status(404).json({ error: 'No recipes found for this dish' });
  }

  const listOfSteps = dish.listOfSteps;
  res.json({ name: dishName, listOfSteps });
});

app.get('/dishes/cuisine/:cuisine', (req, res) => {
  const cuisine = req.params.cuisine;
  const filteredDishes = dishes.filter((dish) => dish.cuisine === cuisine);

  if (filteredDishes.length === 0) {
    return res
      .status(404)
      .json({ error: 'No dishes found for the specified cuisine' });
  }
  res.json(filteredDishes);
});

// app.post('/dishes', (req, res) => {
//   console.log('POST ROUTE REACHED');

//   const newDish = req.body;
//   dishes.push(newDish);
//   res.send();

//   res.json(newDish);
// });

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
