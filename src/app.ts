import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';
import aboutRoutes from './routes/aboutRoutes'


const app = express();
const port = process.env.PORT || 3001; // Changed to port 3001

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/demoapi', {
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use(bodyParser.json());
app.use('/api/users', userRoutes);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
