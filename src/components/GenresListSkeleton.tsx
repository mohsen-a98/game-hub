import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

function GenresListSkeleton() {
  const skeletons = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton} paddingY="5px">
          <HStack>
            <Skeleton boxSize="32px" />
            <SkeletonText noOfLines={2}>loading...</SkeletonText>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenresListSkeleton;
