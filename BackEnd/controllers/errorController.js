// TODO: Add production error handlers
module.exports = (err, req, res, next) => {
  // console.log(err, err);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  console.log(err);

  sendErrorDev(err, req, res);
  next();
};

const sendErrorDev = (err, req, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
