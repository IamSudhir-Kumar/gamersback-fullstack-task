import { useState } from 'react';
import './addtask.scss';
import { addTask } from '../../redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddTask = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;
  const [state, setState] = useState({
    task: '',
  });

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(state.task, currentUser.id))
      .then(() => {
        setState({
          task: '',
        });
      })
      .catch((error) => {
        console.error('Error adding task:', error);
        // Handle error here
      });
  };
  

  return (
    <div>
      <div className='addtask'>
        <form action='' onSubmit={handleSubmit}>
          <input
            type='text'
            name='task'
            placeholder='Add your task'
            onChange={handleChange}
            value={state.task}
          />
          <button type='submit' className='button'>
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
