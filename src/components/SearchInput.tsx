import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

function SearchInput() {
  const navigate = useNavigate();
  const { setSearchText } = useGameQueryStore();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />

        <Input
          ref={ref}
          variant="filled"
          placeholder="Search games..."
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
