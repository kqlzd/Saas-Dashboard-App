import { Grid, GridItem, Box } from "@chakra-ui/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from ".";

export const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Grid
      templateAreas={`
        "navbar navbar"
        "sidebar content"
      `}
      templateRows="64px 2fr"
      templateColumns="240px 2fr"
      height="100vh"
      transition="all 0.3s ease-in-out"
    >
      <GridItem area="navbar" p={4}>
        <Navbar toggleSideBar={toggleSideBar} />
      </GridItem>

      <GridItem
        area="sidebar"
        overflow="hidden"
        transition="all 0.3s ease-in-out"
      >
        <Box
          width="240px"
          height="100%"
          transform={isSidebarOpen ? "translateX(0)" : "translateX(-100%)"}
          transition="transform 0.3s ease-in-out"
        >
          <Sidebar />
        </Box>
      </GridItem>

      <GridItem area="content" bg="gray.100" p={8}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};
