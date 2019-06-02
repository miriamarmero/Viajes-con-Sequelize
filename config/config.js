module.exports = {
    development: {
        dialect: 'mysql',
        username:'travelAdmin',
        password: 'travel1234',
        database: 'travel',
        host: 'localhost',
    },
    test: {
      dialect: "mysql",
      storage: ":memory:"
    },
    production: {
        username:'travelAdmin',
        password: 'travel1234',
        database: 'travel',
        host: 'localhost',
        dialect: 'mysql',
        use_env_variable: 'DATABASE_URL'
    }
};