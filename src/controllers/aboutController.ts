import { Request, Response } from 'express';
import About from '../models/aboutModel';

export const getAbout = async (req: Request, res: Response) => {
  try {
    const about = await About.find();
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching about', error });
  }
};

export const createAbout = async (req: Request, res: Response) => {
  try {
    const newAbout = new About(req.body);
    await newAbout.save();
    res.status(201).json(newAbout);
  } catch (error) {
    res.status(500).json({ message: 'Error creating about', error });
  }
};
