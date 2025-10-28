export default () => ({
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_AUTH_SECRECT: process.env.JWT_AUTH_SECRECT,
  REFRESH_JWT_SECRECT: process.env.REFRESH_JWT_SECRECT,
});