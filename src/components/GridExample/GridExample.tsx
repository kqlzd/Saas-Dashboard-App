import { Grid, GridItem } from "@chakra-ui/react";

export const GridExample = () => {
  return (
    <Grid templateRows="200px 200px" templateColumns="200px 200px">
      <GridItem bg="red">Box1</GridItem>
      <GridItem bg="blue">Box2</GridItem>
      <GridItem bg="yellow">Box3</GridItem>
      <GridItem bg="purple">Box4</GridItem>
    </Grid>
  );
};
