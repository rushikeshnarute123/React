// import { useState } from "react"
import { useFormik } from "formik";


const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username Is Required';
    } // else if (values.firstName.length > 15) {
//      errors.firstName = 'Must be 15 characters or less';
//    }
 
//    if (!values.lastName) {
//      errors.lastName = 'Required';
//    } else if (values.lastName.length > 20) {
//      errors.lastName = 'Must be 20 characters or less';
//    }
 
//    if (!values.email) {
//      errors.email = 'Required';
//    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//      errors.email = 'Invalid email address';
//    }
 
   return errors;
 };



export default function CommentsForm({ addNewComment }) {
    // let [formData, setFormData] = useState({
    //     username:"",
    //     remark:"",
    //     ratings:5
    // });

    const formik = useFormik({
     initialValues: {
       username: '',
       remark: '',
       ratings: 5,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return {...currData, [event.target.name] : event.target.value};
    //     });
    // };

    // let handleSubmit = (event) => {
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();

    //     setFormData({
    //     username:"",
    //     remark:"",
    //     ratings:5
    // });
    // };



    return (
        <div>
            <h4>Give a comment!</h4>

            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="Username">Username : </label>
                <input type="text" id="Username" name="username" placeholder="username" value={formik.values.username} onChange={formik.handleChange}/>
                {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                <br /><br />
                <label htmlFor="Remark">Remark : </label>
                <textarea id="Remark" name="remark" placeholder="remark" value={formik.values.remark} onChange={formik.handleChange}>Remark</textarea>
                <br /><br />
                <label htmlFor="Ratings">Ratings : </label>
                <input type="number" id="Ratings" name="ratings" placeholder="ratings" min={1} max={5} value={formik.values.ratings} onChange={formik.handleChange}/>
                <br /><br />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}