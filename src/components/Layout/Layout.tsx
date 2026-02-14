import { Grid, GridItem } from "@chakra-ui/react";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

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
      templateRows="64px 1fr"
      templateColumns="240px 1fr"
      height="100vh"
    >
      <GridItem area="navbar" p={4}>
        <Navbar toggleSideBar={toggleSideBar} />
      </GridItem>

      <GridItem area="sidebar" p={4} display={isSidebarOpen ? "block" : "none"}>
        <Sidebar />
      </GridItem>

      <GridItem area="content" bg="gray.100" p={8}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};
