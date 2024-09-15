import express from 'express';
import TicketModel from '../models/ticketModels.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const ticket = new TicketModel(req.body);
    await ticket.save();
    res.status(201).send(ticket);
  } catch (err) {
    res.status(400).send({ message: 'Invalid input' });
  }
});

router.get('/', async (req, res) => {
  try {
    const tickets = await TicketModel.find().exec();
    res.send(tickets);
  } catch (err) {
    res.status(500).send({ message: 'Error retrieving tickets' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const ticket = await TicketModel.findById(req.params.id).exec();
    if (!ticket) {
      res.status(404).send({ message: 'Ticket not found' });
    } else {
      res.send(ticket);
    }
  } catch (err) {
    res.status(500).send({ message: 'Error retrieving ticket' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const ticket = await TicketModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    if (!ticket) {
      res.status(404).send({ message: 'Ticket not found' });
    } else {
      res.send(ticket);
    }
  } catch (err) {
    res.status(400).send({ message: 'Invalid input' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await TicketModel.findByIdAndRemove(req.params.id).exec();
    res.status(204).send();
  } catch (err) {
    res.status(500).send({ message: 'Error deleting ticket..' });
  }
});

export default router;