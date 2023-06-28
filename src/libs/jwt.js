import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../../config.js";
/**
 * Creates a JSON Web Token (JWT) with the user ID and a secret key, and sets it as a cookie.
 *
 * @param {Object} user - The user object containing the unique ID.
 * @return {String} The JWT signed with the secret key.
 */
export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, TOKEN_SECRET,{ expiresIn: "1h"}, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}
   