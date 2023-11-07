const dbPool = require("../config/db");

const getAll = () => {
  const query = "SELECT * FROM tbl_user";

  return dbPool.execute(query);
}

const getOne = (id) => {
  const query = `SELECT * FROM tbl_user WHERE userid=${id}`

  return dbPool.execute(query);
}

const create = (userid, namalengkap, username, password, status) => {
  const query = `INSERT INTO tbl_user VALUES(${userid}, '${namalengkap}', '${username}', 
                 ${password}, '${status}')`;

  return dbPool.execute(query);
}

const remove = (id) => {
  const query = `DELETE FROM tbl_user WHERE userid=${id}`;

  return dbPool.execute(query);
}

module.exports = { create, getAll, getOne, remove }