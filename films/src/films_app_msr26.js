/*
Mauricio Rivera
msr26
Sept 23, 2026
IT302001
Unit 05 Express.js Part 2 In-Class Exercise
*/

import express from 'express';
import { MongoClient } from 'mongodb';

const port = 3000;
const mongoUrl = 'mongodb+srv://omgmsebastian_db_user:Iz9y79JoGHitZJ7i@sv1-cluster-0.civv6pn.mongodb.net';

const app = express();
app.use(express.json());

// Define a function to connect to MongoDB and return the database object
async function connectToMongo() {
  const client = new MongoClient(mongoUrl);
  try {
    await client.connect();
    return client.db('it302');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// Route to get films from MongoDB and return them as JSON
app.get('/films_msr26', async (req, res) => {
  try {
    const db = await connectToMongo();
    // Remove the filter query
    const query = {};
    // Use the query object to find all films
    const films_msr26 = await db.collection('films_msr26').find(query).toArray();
    res.json(films_msr26);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ error: 'Error fetching films from the database' });
  }
});

// Route to get films from MongDB and handle filtering based on the "title" field
app.get('/films_title_msr26', async (req, res) => {
  try {
    const db = await connectToMongo();
   
    // Get the "title" filter from the query parameters
    const propertyTypeFilter = req.query.title;
    // Define a query object based on the filter, or an empty query if no filter is provided
    const query = propertyTypeFilter ? { title: propertyTypeFilter } : {};
    // Use the query object to find films that match the filter
    const films_msr26 = await db.collection('films_msr26').find(query).toArray();
    res.json(films_msr26);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ error: 'Error fetching filtered films from the database' });
  }
});

app.get('/films_genre_msr26', async (req, res) => {
  try {
    const db = await connectToMongo();
    // Get the "genre" filter from the query parameters
    const genreFilter = req.query.genre;
    // Define a query object based on the filter, or an empty query if no filter is provided
    const query = genreFilter ? { genre: genreFilter } : {};
    // Use the query object to find films that match the filter
    const films_msr26 = await db.collection('films_msr26').find(query).toArray();
    res.json(films_msr26);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ error: 'Error fetching filtered films from the database' });
  }
});

app.post('/films_msr26', async (req, res) => {
  try {
    const db = await connectToMongo();
    const { title, year, genre, actors } = req.body;
    if (!title || !year || !genre || !actors) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newFilm = { title, year, genre, actors };
    const result = await db.collection('films_msr26').insertOne(newFilm);
    if (!result.acknowledged) {
      return res.status(500).json({ error: 'Failed to add film to the database' });
    }
    
    res.status(201).json({ message: 'Film added successfully', filmId: result.insertedId });
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ error: 'Error adding film to the database' });
  }
});

app.delete('/films_msr26', async (req, res) => {
  try {
    const db = await connectToMongo();
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Missing required field: title' });
    }

    const result = await db.collection('films_msr26').deleteOne({ title });
    if (result.deletedCount === 0) {
      return res.status(500).json({ error: 'No film found with the specified title' });
    }

    res.json({ message: 'Film deleted successfully' });
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ error: 'Error deleting film from the database' });
  }
});

// TODO Route to get films from MongoDB and handle filtering based on the "genre" field
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});