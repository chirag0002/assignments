const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    if (!(zod.string().email().safeParse(username).success)  || !(zod.string().min(6).safeParse(password).success)) {
        console.log("Creditentials are not valid")
        return null
    }

    const payload = { username, password };
    const token = jwt.sign(payload, jwtPassword);
    return token;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    const boo = jwt.verify(token, jwtPassword, (err) => {
        if (err) {
            return false
        }
        return true
    });

    return boo;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    const boo = jwt.decode(token, (err, decoded) => {
        if (err) {
            return false
        }
        return decoded
    });

    if (boo === null || boo === "null") {
        return false
    } else {
       return boo
    }
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
