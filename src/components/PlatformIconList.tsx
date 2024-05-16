import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { type Platform } from "../types/Platform";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platform: Platform[];
}

function PlatformIconList({ platform }: PlatformIconListProps) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack marginY={1}>
      {platform.map((p) => (
        <Icon key={p.id} as={iconMap[p.slug]} color={"gray.500"} />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
