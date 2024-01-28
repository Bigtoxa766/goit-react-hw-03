import { useId } from "react";
import css from './ContactForm.module.css'


export const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();
  
  const handleSubmit = e => {
    e.preventDefault();
    
    const form = e.target;
    const { name, number } = form.elements;
    
    onAdd({
      name: name.value,
      number: number.value
    });
    e.target.reset();
  }

  return (
    <form className={css.form_container} onSubmit={handleSubmit}>
      <label className={css.form_lable} htmlFor={nameId}>Name</label>
      <input type="text" name="name" id={nameId} />
      <label className={css.form_lable} htmlFor={numberId}>Number</label>
      <input type="text" name="number" id={ numberId} />
      <button className={ css.form_btn}type="submit">Add contact</button>
    </form>
  )
}