import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initalTask = localStorage.getItem('task')
	? JSON.parse(localStorage.getItem('task'))
	: {};

const initialState = {
	TaskData: initalTask,
	AllTasks: {},
};

export const taskSlice = createSlice({
	name: 'Task',
	initialState,
	reducers: {
		taskAddedSuccessfully: (state, action) => {
			state.TaskData = action.payload;
		},
		taskAddFailure: (state) => {
			return state;
		},
		getAllTaskSuccess: (state, action) => {
			state.AllTasks = action.payload;
		},
		getAllTaskFailure: (state) => {
			return state;
		},
		editTaskSuccess: (state, action) => {
			state.TaskData = action.payload;
		},
		deleteSuccess: (state) => {
			return state;
		},
		deletefail: (state) => {
			return state;
		},
	},
});

export const {
	taskAddFailure,
	taskAddedSuccessfully,
	getAllTaskFailure,
	getAllTaskSuccess,
	deleteSuccess,
	deletefail,
	editTaskSuccess,
} = taskSlice.actions;

export default taskSlice.reducer;

export const addTask = (task, id) => async (dispatch) => {
    try {
        if (task.length < 10) {
            toast.error('Task must be at least 10 characters long');
            return;
        }

        const taskData = { task, id };
        const response = await axios.post('http://localhost:4000/task/add', taskData);
        
        if (response.status === 200 && response.data) {
            localStorage.setItem('task', JSON.stringify(response.data));
            dispatch(taskAddedSuccessfully(response.data));
            toast.success('Task added successfully');
			window.location.reload();
        } else {
            toast.error('Failed to add task');
            dispatch(taskAddFailure());
        }
    } catch (error) {
        console.error('Error adding task:', error);
        toast.error('Failed to add task');
        dispatch(taskAddFailure());
    }
};



export const getAllTasks = (token, id) => async (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		params: {
			id,
		},
	};

	try {
		const response = await axios.get('http://localhost:4000/task/tasks', config);

		if (response.data) {
			dispatch(getAllTaskSuccess(response.data));
		}
	} catch (error) {
		console.error('Error fetching tasks:', error);
		dispatch(getAllTaskFailure());
	}
};

export const arrowClick = (item, string) => async () => {
	const taskData = {
		id: item._id,
		status: item.status,
		string,
	};

	try {
		const response = await axios.put(`http://localhost:4000/task/${taskData.id}`, taskData);

		if (response.data) {
			window.location.reload();
		}
	} catch (error) {
		console.error('Error updating task:', error);
		// Dispatch an action for failure
	}
};

export const deleteItem = (id) => async (dispatch) => {
	try {
		const res = await axios.delete(`http://localhost:4000/task/${id}`);

		if (res.data) {
			dispatch(deleteSuccess());
			window.location.reload();
			toast.success('Task deleted successfully');
		} else {
			toast.error('Failed to delete task');
			dispatch(deletefail());
		}
	} catch (error) {
		console.error('Error deleting task:', error);
		toast.error('Failed to delete task');
		dispatch(deletefail());
	}
};
