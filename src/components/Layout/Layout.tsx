import { Grid, GridItem, Box } from "@chakra-ui/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from ".";
import { useTheme } from "../../hooks/useThemeContext";

export const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isDark } = useTheme();

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Grid
      templateAreas={`
        "navbar navbar"
        "sidebar content"
      `}
      templateRows="64px 1fr"
      templateColumns={isSidebarOpen ? "240px 1fr" : "0px 1fr"}
      height="100vh"
      transition="all 0.3s ease-in-out"
      bg={isDark ? "gray.900" : "gray.50"}
    >
      <GridItem area="navbar">
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
          <Sidebar isDark={isDark} />
        </Box>
      </GridItem>

      <GridItem
        area="content"
        bg={isDark ? "gray.900" : "gray.50"}
        p={6}
        overflowY="auto"
      >
        <Outlet />
      </GridItem>
    </Grid>
  );
};
