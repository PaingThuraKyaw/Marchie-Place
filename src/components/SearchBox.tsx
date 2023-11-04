import { ChangeEvent, FormEvent, useState } from "react";
import { useProducts } from "../store/server/query";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [state, setState] = useState("");
  const { data, isLoading } = useProducts();
  const navigate = useNavigate();

  // Function to handle changes in the search input
  const handleSearchInputChange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filter = data?.filter(
      (item) =>
        item.title
          .toLowerCase()
          .trim()
          .includes(state.toLocaleLowerCase().trim()) ||
        item.category
          .toLocaleLowerCase()
          .trim()
          .includes(state.toLocaleLowerCase().trim())
    );
    setState("");
    navigate("/search", {
      state: {
        product: filter,
        value: state,
        isLoading,
      },
    });
  };

  return (
    <div className="w-full max-w-sm mx-auto p-5">
      <form
        onSubmit={(e) => handleSearchInputChange(e)}
        className="relative text-gray-600"
      >
        <input
          type="text"
          placeholder="Search"
          value={state}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setState(e.target.value)
          }
          className="w-full h-10 pl-3 pr-10 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-primary transition duration-300"
        />
      </form>
    </div>
  );
};

export default SearchBox;
