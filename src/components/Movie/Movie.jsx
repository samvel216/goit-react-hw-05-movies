import { fetchInputData } from '../../Api';
import { Link, Outlet } from 'react-router-dom';
export default function Movies({
  inputMoviesChange,
  searchInputForm,
  inputValue,
}) {
  console.log(inputValue);
  return (
    <form action="" onSubmit={searchInputForm}>
      <label htmlFor="">
        <input type="text" onChange={inputMoviesChange} />
      </label>
      <button>
        <Link to={`/movies?query=${inputValue}`}>Перейди сучка</Link>
        <Outlet />
      </button>
    </form>
  );
}
