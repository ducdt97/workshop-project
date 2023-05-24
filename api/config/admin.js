module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', "Zr+LAhjlQzpEEFHdtRV1JQ=="),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', "kK/33jV28DESwC0uWGTURzapdE/iKZB9BnpxERW/zKs4uiLJkn7BVYzfVUKNj6hv"),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', "rH/a7IXHBog5oBf65z0jbIo92Ilvo1uX/qBXj/fFGe3kzRd2qKVozLd2QGyXynaP"),
    },
  },
});
