import { useId } from "react";
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";
import css from './ContactForm.module.css'

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symbols long")
    .max(20, "Maximum 20 symbols")
    .required('This field is required'),
  number: Yup.number()
    .integer('Please enter the integer value')
    .required('This field is required')
})

export const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik initialValues={{
      name: '',
      number: ''
    }} onSubmit={(values, actions) => {
      
      onAdd({ ...values })
      actions.resetForm()
    }}
      validationSchema={contactSchema}>
      
      <Form className={css.form_container} >
        <label className={css.form_lable} htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage className={css.error_message} name="name" component="span"/>
        <label className={css.form_lable} htmlFor={numberId}>Number</label>
        <Field type="text" name="number" id={numberId} />
        <ErrorMessage className={css.error_message} name="number" component="span"/>
        <button className={css.form_btn} type="submit">Add contact</button>
      </Form>
       
    </Formik>
  )
};