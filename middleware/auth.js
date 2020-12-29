const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'hoijhog4o1dsùqu_éhgdfos"duhg$1fùbhsdgbfytu8è_gsdfygsduyfgosdh_ç8bfuysdgùfuààygs2dquyg)fiu$qdgfivyfc');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};