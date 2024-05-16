import { Switch, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      colorScheme="green"
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
      whiteSpace="nowrap"
    >
      Dark mode
    </Switch>
  );
}

export default ColorModeSwitch;
