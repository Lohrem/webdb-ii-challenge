module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/Cars.db3'
    },
    useNullAsDefault: true
  }
}