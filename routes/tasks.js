const express = require('express')
const router = express.Router();

const { postTask, getTasks, getTask, patchTask, deleteTask } = require('../controllers/tasks')

router.route('/').get(getTasks).post(postTask)
router.route('/:id').get(getTask).patch(patchTask).delete(deleteTask)

module.exports = router