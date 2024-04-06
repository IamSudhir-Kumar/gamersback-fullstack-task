const Task = require('../../database/model/task.model');

const addTask = async (req, res) => {
	try {
		const { task, id } = req.body;

		if (!task) return res.status(400).send('Please enter the task');
		if (task.length < 10) return res.status(400).send('Task must be at least 10 characters long');

		const taskDetail = new Task({
			task,
			createdBy: id,
		});
		await taskDetail.save();
		return res.status(200).send(taskDetail);
	} catch (error) {
		console.error('Error adding task:', error);
		return res.status(500).send('Task addition failed');
	}
};

const getAllTasks = async (req, res) => {
	try {
		const { id } = req.query;
		const tasklist = await Task.find({ createdBy: id });
		return res.status(200).send(tasklist);
	} catch (error) {
		console.error('Error fetching tasks:', error);
		return res.status(500).send('Failed to fetch tasks');
	}
};

const statusChange = async (req, res) => {
	try {
		const { id, string } = req.body;
		let task = await Task.findById(id);

		if (!task) return res.status(404).send('Task not found');

		if (string === 'right') {
			if (task.status === 'backlog') task.status = 'todo';
			else if (task.status === 'todo') task.status = 'doing';
			else if (task.status === 'doing') task.status = 'done';
			else return res.status(400).send('Invalid task status');
		} else {
			if (task.status === 'done') task.status = 'doing';
			else if (task.status === 'doing') task.status = 'todo';
			else if (task.status === 'todo') task.status = 'backlog';
			else return res.status(400).send('Invalid task status');
		}

		await task.save();
		return res.status(200).send(task);
	} catch (error) {
		console.error('Error changing task status:', error);
		return res.status(500).send('Failed to change task status');
	}
};

const deleteTask = async (req, res) => {
	try {
		const { id } = req.params;
		const response = await Task.findByIdAndDelete(id);
		if (!response) return res.status(404).send('Task not found');
		return res.status(200).send(response);
	} catch (error) {
		console.error('Error deleting task:', error);
		return res.status(500).send('Failed to delete task');
	}
};

const editTask = async (req, res) => {
	try {
		const { id } = req.params;
		const { task } = req.body;
		const response = await Task.findByIdAndUpdate(
			id,
			{ task },
			{ new: true }
		);
		if (!response) {
			return res.status(404).send('Task not found');
		}
		return res.status(200).send(response);
	} catch (error) {
		console.error('Error editing task:', error);
		return res.status(500).send('Failed to edit task');
	}
};

module.exports = {
	editTask,
	addTask,
	getAllTasks,
	statusChange,
	deleteTask,
};
