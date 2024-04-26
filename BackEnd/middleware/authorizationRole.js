function authRole(role) {
  return (req, res, next) => {
    if (req.userType !== role) {
      return res
        .status(403)
        .json(`You should be ${role} not a ${req.userType}`);
    }
    next();
  };
}

module.exports = authRole;
