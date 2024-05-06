import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.contactCard}>
      <div>
        <p className={css.name}>
          <FaUser />
          {name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
