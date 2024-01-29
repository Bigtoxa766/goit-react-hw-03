// import { Formik } from 'formik';
// import * as Yup from "yup";
import css from './SearchBar.module.css'

export const SearchBar = ({ value, onChange }) => {

  return (
    <label className={css.search_bar}>
      Find contacts by name
       <input
      type="text"
      value={value }
      onChange={ e => onChange(e.target.value)} />
    </label>
  )
};