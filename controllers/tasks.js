const postTask = async (req, res) => {
  try {
    res.send('post task')
  } catch (err) {
    console.log(err);
  }
}

const getTasks = async (req, res) => {
  try {
    res.send('get all tasks')
  } catch (err) {
    console.log(err)
  }
}

const getTask = async (req, res) => {
  try {
    res.send('get single task')
  } catch (err) {
    console.log(err);
  }
}

const patchTask = async (req, res) => {
  try {
    res.send('update task with patch')
  } catch (err) {
    console.log(err);
  }
}

const deleteTask = async (req, res) => {
  try {
    res.send('delete task')
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  postTask,
  getTasks,
  getTask,
  patchTask,
  deleteTask
}