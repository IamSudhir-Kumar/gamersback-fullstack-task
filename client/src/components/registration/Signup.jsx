import "./registration.scss"
import "../../styles/components/_button.scss"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from "../../redux/authSlice"

const Signup = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        username: '',
        email: '',
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(
            register({
            username: state.username,
            email: state.email,
            password: state.password
        }))
    }
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    console.log(state.email, state.password, state.username)
    return (
        <div className='signup-form'>
            <div className='signup-form__wrapper'>
                <form className='form' onSubmit={handleSubmit}>
                    <h4>Sign up</h4>

                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Enter Name'
                            name='username'
                            value={state.username}
                            onChange={handleChange}
                        />
                    </div>
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
                            id=''
                            placeholder='Enter Password'
                            value={state.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <button
                            className='button'>
                            Sing Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup