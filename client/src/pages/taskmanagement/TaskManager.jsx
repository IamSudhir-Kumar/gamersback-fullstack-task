import './TaskManager.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import AddTask from '../../components/taskmanger/AddTask'
import TaskList from '../../components/taskmanger/TaskList'

const TaskManager = () => {
    return (
        <div>
            <div className='taskmanager'>
                <div className='taskmanager__left'>
                    <Sidebar />
                </div>
                <div className='taskmanager__right'>
                    <div className='taskmanager__addtask'>
                        <AddTask />
                    </div>
                    <div className='taskmanager__tasklist'>
                        <TaskList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskManager