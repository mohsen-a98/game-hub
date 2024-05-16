import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatform } from "../hooks/usePlatform";
import useGameQueryStore from "../store";

function PlatformSelector() {
  const { gameQuery, setPlatformId } = useGameQueryStore();
  const { platforms, isLoading } = usePlatform();
  const selectedPlatform = platforms?.results?.find(
    (platform) => platform.id === gameQuery.platformId
  );

  if (isLoading) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
