import React from 'react';
import { useFormik } from 'formik';

function SimpleForm() {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        onSubmit: values =>{
            console.log('Form Data', formik.values)
        },
        validate: values =>{
            let errors = {}

            if(!values.name){
                errors.name='Required'
            }

            if(!values.email){
                errors.email='Required'
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                  errors.email = "Invalid email format"
            }

            if(!values.password){
                errors.password='Required'
            }

            return errors
        } 
    })
    console.log('Form Errors', formik.errors)

    // console.log('Form Values', formik.values)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control"> 
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
                {formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
                 ) : null}
                </div>

                <div className="form-control">
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
                {formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
                 ) : null}
                </div>

                <div className="form-control">
                <label htmlFor='password'>Password</label>
                <input type='text' id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
                {formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
                ) : null}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm
