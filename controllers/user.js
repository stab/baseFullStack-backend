const bcrypt = require('bcrypt');

const User = require('../models/user');

/* POST new user */
exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      User.create({
        ...req.body,
        birthdate: Date.parse(req.body.birthdate),
        password: hash
      }, { fields: ['firstname', 'lastname', 'birthdate', 'password', 'email'] })
        .then((user) => res.status(201).json(user))
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => res.status(500).json({ error }))
};

/* GET all users. */
exports.getAllUsers = (req, res, next) => {
  User.findAll()
    .then(users => {
      if (users.length >= 1) {
        res.status(200).json(users)
      } else {
        res.status(204).json({})
      }
    })
    .catch(error => res.status(500).json({ error }))
};

/* GET one user. */
exports.getOneUser = (req, res, next) => {
  User.findByPk(req.params.pk)
    .then(user => {
      if (user) {
        res.status(200).json(user)
      } else {
        res.status(404).json({ message: "Utilisateur inconnu." })
      }
    })
    .catch(error => res.status(500).json({ error }))

};

/* DELETE one user. */
exports.deleteUser = (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.pk
    }
  })
};

/* UPDATE one user. */
exports.modifyUser = (req, res, next) => {
  User.update({
    ...req.body,
    birthdate: Date.parse(req.body.birthdate)
  },
  {
    where: {
      id: req.params.pk
    },
    fields: ['firstname', 'lastname', 'birthdate', 'password', 'email']
  })
};
