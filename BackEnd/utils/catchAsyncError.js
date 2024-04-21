// catchAsync is more for the unexpected error, (usually handled using try catch)

module.exports = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};
