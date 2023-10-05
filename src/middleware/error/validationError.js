// the middleware components handling validation error
// Use debug mode, set a break point before the line "console.log(error)"
// run debug command with "nodemon --inspect xxx.js" and we can see the error
// object prototype's detail information when hover over the error, and we can find
// it have a name attribute to indicate the type of error
module.exports = (error, req, res, next) => {
    // console.log(error)
    if (error.name === 'ValidationError') {
      res.status(400).json({ error: error.message });
      return;
    }
    // if not validation error, then pass the error to next handling middleware
    next(error);
  };
  