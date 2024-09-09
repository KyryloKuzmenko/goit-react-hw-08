import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn, selectAuthUser } from "../../redux/auth/selectors";
import css from "./HomePage.module.css"

const HomePage = () => {
    const user = useSelector(selectAuthUser);
    const isLoggedIn = useSelector(selectAuthIsLoggedIn)

    return (
      <div>
        {isLoggedIn ? (
          <p className={css.greeting}>Hello, {user.name}!</p>
        ) : (
          <p className={css.notice}>To access the contacts, you need to log in or register.</p>
        )}
      </div>
    );
};

export default HomePage;