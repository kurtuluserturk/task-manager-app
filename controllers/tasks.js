const getAllTasks = async (req, res) => {
  try {
    res.send('all tasks')
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getAllTasks
}