module.exports = ({env}) => {
  console.log('STRAPI_ADMIN_BACKEND_URL', env('STRAPI_ADMIN_BACKEND_URL'));
  console.log('ADMIN_JWT_SECRET', env('ADMIN_JWT_SECRET'));
  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
  }
};
