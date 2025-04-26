export const getTodos = (req, res, next) => {
  res.status(200).json({ message: "Get all todos" });
};
