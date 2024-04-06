import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signin } from '../../redux/authSlice' // Make sure to import your signin action

const Signin = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        email: '',
        password: '' // Define password in initial state
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signin( // Corrected dispatch to signin
            {
                email: state.email,
                password: state.password
            }
        ))
    }
    return (
        <div className='signup-form'>
            <div className='signup-form__wrapper'>
                <form className='form' onSubmit={handleSubmit}>
                    <h4>Sign In</h4>
                    <div className='form-group'>
                        <input
                            type='email'
                            name='email'
                            value={state.email}
                            id=''
                            placeholder='Enter Email'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            name='password'
                            value={state.password}
                            id=''
                            placeholder='Enter Password'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <button className='button'>Sign In</button> {/* Corrected button text */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin
