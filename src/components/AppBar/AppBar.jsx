import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from '../../redux/auth/selectors';
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav"

const AppBar = () => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);

    return (
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    );
};

export default AppBar;