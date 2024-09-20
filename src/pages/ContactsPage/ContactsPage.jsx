import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import style from './ContactPage.module.css'

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts()).unwrap().then(() => {
      toast.success("Contacts loaded successfully")
    });
  }, [dispatch]);

  return (
    <div className={style.wrap}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <p>Loading contacts...</p>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
