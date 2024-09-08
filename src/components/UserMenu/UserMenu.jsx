import { useDispatch } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";

const UserMenu = () => {
    const dispatch = useDispatch();

      const onLogut = () => {
        dispatch(apiLogout());
    };
    
    return (
      <div>
        <button type="button" onClick={onLogut}>
          Logout
        </button>
      </div>
    );
}

export default UserMenu;