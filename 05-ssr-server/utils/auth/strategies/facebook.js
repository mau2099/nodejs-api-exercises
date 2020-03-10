const passport = require("passport");
const { Strategy: FacebookStrategy } = require("passport-facebook");
const axios = require("axios");
const boom = require("@hapi/boom");
const { config } = require("../../../config/index");

passport.use(
  new FacebookStrategy(
    {
      clientID: config.facebookClientId,
      clientSecret: config.facebookClientSecret,
      callbackURL: "/auth/facebook/callback",
    },
    async function(accessToken, refreshToken, profile, cb) {
      //   console.log("--> entro a buscar la informacion en facebook del usuario", {
      //     profile: profile,
      //   });
      const email = profile.email
        ? profile.email
        : `${profile.id}@facebook.com`;

      const { data, status } = await axios({
        url: `${config.apiUrl}/api/auth/sign-provider`,
        method: "post",
        data: {
          name: profile.displayName,
          email: email,
          password: profile.id,
          apiKeyToken: config.apiKeyToken,
        },
      });

      console.log("--> obtuvo los datos y lo paso al data", { data: data });
      if (!data || status !== 200) {
        return cb(boom.unauthorized(), false);
      }

      return cb(null, data);
    },
  ),
);
