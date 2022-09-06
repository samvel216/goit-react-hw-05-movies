export default function Movies({ inputMoviesChange, searchInputForm }) {
  return (
    <form action="" onSubmit={searchInputForm}>
      <label htmlFor="">
        <input type="text" onChange={inputMoviesChange} />
      </label>
      <button>Search</button>
    </form>
  );
}
