import mongoose from 'mongoose';
import express from 'express';
import User from './db/userModel';

const app = express();
app.use(express.json());

mongoose.set('strictQuery', true);

mongoose
  .connect('mongodb://0.0.0.0:3000/')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.post('/users', (req, res) => {
  const { name, username } = req.body;
  console.log(name, username);

  const user = new User({
    name,
    username,
  });

  user.save().then((user) => {
    res.json(user);
  });
});

export default app;
