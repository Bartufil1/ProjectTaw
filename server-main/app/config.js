const config = {
  port: process.env.PORT || 3001,
  databaseUrl:
    process.env.MONGODB_URI ||
    "mongodb+srv://taw123:taw123@cluster0.rgqmios.mongodb.net/?retryWrites=true&w=majority",

  JwtSecret: process.env.JWT_SECRET || "secret",
};

export default config;
