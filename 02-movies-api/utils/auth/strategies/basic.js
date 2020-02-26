const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt'); // se usa para comparar el password en bd con el que escribe el usuario

const UsersService = require('../../../services/users');

passport.use(
  new BasicStrategy(async function(email, password, cb) {
    const userService = new UsersService();

    try {
      const user = await userService.getUser({ email });

      if (!user) {
        return cb(boom.unauthorized(), false);
      }
      console.log('comparando passwords', {
        password: password,
        passwordHashed: await bcrypt.hash(password, 10),
        bdPassword: user.password,
        compare: await bcrypt.compare(password, user.password)
      });
      if (!(await bcrypt.compare(password, user.password))) {
        return cb(boom.unauthorized(), false);
      }
      console.log('la contraseña fue validada con exito');
      delete user.password;

      return cb(null, user);
    } catch (error) {
      return cb(error);
    }
  })
);
