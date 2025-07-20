
import prisma from '../config/db.js';

export const createBill = async (req, res) => {
  try {
    const { customer, items, total } = req.body;
    const newBill = await prisma.bill.create({
      data: { customer, items, total },
    });
    res.status(201).json(newBill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

