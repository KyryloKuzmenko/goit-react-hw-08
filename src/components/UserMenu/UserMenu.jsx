import { useDispatch } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css"
import { selectAuthUser } from "../../redux/auth/selectors"
import { useSelector } from "react-redux";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectAuthUser);

      const onLogut = () => {
        dispatch(apiLogout());
    };
    
    return (
      <div className={css.wrap}>
        <p className={css.name}>{userName.name}</p>
        <button className={css.btn} type="button" onClick={onLogut}>
          Logout
        </button>
      </div>
    );
}

export default UserMenu;