import React from 'react';
import { useFormik } from 'formik';

function SimpleForm() {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    console.log('Form Values', formik.values)

    return (
        <div>
            <form>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />

                <label htmlFor='password'>Password</label>
                <input type='text' id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm
