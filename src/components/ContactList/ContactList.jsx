import { useSelector } from "react-redux";
// import { selectFilteredContacts } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {contacts.map((contact) => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </>
  );
}
