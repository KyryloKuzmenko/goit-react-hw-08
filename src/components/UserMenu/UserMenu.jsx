import { useDispatch } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css"

const UserMenu = () => {
    const dispatch = useDispatch();

      const onLogut = () => {
        dispatch(apiLogout());
    };
    
    return (
      <div>
        <button className={css.btn} type="button" onClick={onLogut}>
          Logout
        </button>
      </div>
    );
}

export default UserMenu;