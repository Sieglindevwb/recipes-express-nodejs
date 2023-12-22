const checkKey = (req, res, next) => {
  if (req.body.key !== process.env.API_KEY) {
    res.status(401).send({
      error: 401,
      msg: 'Unauthorized. Please provide a valid API key.',
    });
  }
  next();
};

export default checkKey;
