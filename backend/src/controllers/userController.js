const { create, getAll, getOne, remove } = require("../models/userModel");

const getDataUser = async (req, res) => {
  try {
    const [data] = await getAll();
    
    res.status(200).send({
      message: "get data user success",
      data: data
    });
  } catch (error) {
    res.status(500).send({
      message: 'server error',
      serverMessage: error.message
    })
  }
}

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [data] = await getOne(id);
    
    res.status(200).send({
      message: "get data user success",
      data: data
    });
  } catch (error) {
    res.status(500).send({
      message: 'server error',
      serverMessage: error.message
    })
  }
}

const setDataUser = async (req, res) => {
  try {
    const { userid, namalengkap, username, password, status } = req.body;
    await create(userid, namalengkap, username, password, status);

    res.status(201).send({
      message: "create user success",
    });
  } catch (error) {
    res.status(500).send({
      message: 'server error',
      serverMessage: error.message
    })
  }
}

const delDataUser = async (req, res) => {
  try {
    const { id } = req.params;
    await remove(id);

    res.status(201).send({
      message: "delete user success",
    });
  } catch (error) {
    res.status(500).send({
      message: 'server error',
      serverMessage: error.message
    })
  }
}

module.exports = { getDataUser, setDataUser, getOneUser, delDataUser }