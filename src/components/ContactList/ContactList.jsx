import css from './ContactList.module.css'
import { Contact } from "../Contact/Contact"


export const ContactList = ({ userContacts, onDelete }) => {
  return (
    <ul className={css.contact_list}>
      {userContacts.map((item) => {
        return (<li className={css.contact_item} key={item.id}>
          <Contact name={item.name} number={item.number} />
          <button type='button' onClick={()=>onDelete(item.id)}>Delete</button>
        </li>)
      })}
    </ul>
  )
};