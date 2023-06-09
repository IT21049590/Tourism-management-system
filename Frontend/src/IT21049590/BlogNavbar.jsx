import * as React from "react";
import { Link, useParams } from "react-router-dom";
import {
  AppBar,
  Grid,
  Toolbar,
  Tabs,
  Tab,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const BlogNavbar = () => {
  const { id } = useParams();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md")); //use decresing  window size
  console.log(isMatch); //use decresing  window size

  const [value, setValue] = React.useState("one");

  const handleChange = (event = React.SyntheticEvent, newValue = string) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" top="fixed" sx={{ backgroundColor: "#0D2938" }}>
      <Toolbar>
        {isMatch ? (
          <>
            <h4>Blogs</h4>
          </>
        ) : (
          <Grid container>
            <Grid item xs={8}>
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="#ffff"
                  indicatorColor="secondary"
                >
                  <Tab
                    to="/ViewBlogs"
                    LinkComponent={Link}
                    label="View Blogs"
                  />
                  <Tab to="/AllBlogs" LinkComponent={Link} label="All Blogs" />
                  <Tab to="/addBlog" LinkComponent={Link} label="Add Blog" />
                </Tabs>
              </Box>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={1}>
              <Box display="flex">
                <Button
                  to="/"
                  LinkComponent={Link}
                  sx={{ marginLeft: 1, background: "rgba(180,58,58,1)" }}
                  variant="contained"
                >
                  SignOut
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default BlogNavbar;
