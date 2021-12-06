import React from 'react'

function SimpleForm() {
    return (
        <div>
            <form>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' />

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email' />

                <label htmlFor='password'>Password</label>
                <input type='text' id='password' name='password' />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm
