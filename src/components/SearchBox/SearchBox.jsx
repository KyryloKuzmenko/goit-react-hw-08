import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import {selectNameFilter} from "../../redux/filters/selectors"
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searhForm}>
      <p>Find contact by name</p>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
}
