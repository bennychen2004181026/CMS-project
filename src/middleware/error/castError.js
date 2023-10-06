module.exports = (error, req, res, next) => {
    console.error(error)
    if (error.name === 'CastError') {

      res.status(400).json({ error: error.message });
      return;
    }
    next(error);
  };