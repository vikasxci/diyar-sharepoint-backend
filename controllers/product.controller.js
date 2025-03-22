import setupSharePoint from "../config/sharepoint.js";

const listName = "Products";

export const createProduct = async (req, res) => {
  try {
    const sp = await setupSharePoint();
    const product = await sp.web.lists.getByTitle(listName).items.add(req.body);
    res.status(201).json({ success: true, data: product.data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const sp = await setupSharePoint();
    const products = await sp.web.lists.getByTitle(listName).items.get();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};