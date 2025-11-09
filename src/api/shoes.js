// api/shoes.js (Example using Node/Vercel Serverless Function)
import data from '../src/data/db.json'; 

export default function handler(req, res) {
  // Assuming your JSON has a top-level 'shoes' key
  res.status(200).json(data.shoes); 
}