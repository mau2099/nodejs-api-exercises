const passport = require("passport");
const { Strategy: LinkedInStrategy } = require("passport-linkedin-oauth2");
const axios = require("axios");
const boom = require("@hapi/boom");
const { config } = require("../../../config/index");

passport.use(
  new LinkedInStrategy(
    {
      clientID: config.linkedinKey,
      clientSecret: config.linkedinSecret,
      callbackURL: "/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile"],
    },
    async function(accessToken, refreshToken, profile, cb) {
      console.log("--> linkedin profile", profile);
      const { data, status } = await axios({
        url: `${config.apiUrl}/api/auth/sign-provider`,
        method: "post",
        data: {
          name: profile.displayName,
          email: profile.emails[0].value,
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
