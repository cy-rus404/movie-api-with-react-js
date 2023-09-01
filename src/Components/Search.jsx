import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Search = () => {
  const { searchParam, handleOnchange, handleSubmit } =
    useContext(GlobalContext);
  return (
    <div>
      <input
        name="search"
        // value={searchParam}
        onChange={handleOnchange}
        placeholder="Enter Movie Name"
      />
      <button onClick={handleSubmit}>Submit Search</button>
    </div>
  );
};

export default Search;
