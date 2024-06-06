import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import { Avatar } from "@mui/material";
import { Box, Typography } from "@mui/material";

export default function MediaCard() {
  const styles = {
    blogimage: {
      width: 390,
      height: 240,
    },
    blog: {
      width: 390,
    },
  };

  return (
    <Box
      className="border-solid border-2 p-2 shadow-none rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
      sx={{ width: styles.blog.width }}
    >
      <CardMedia
        component="img"
        sx={{ ...styles.blogimage }}
        image="https://cdn.mobilesyrup.com/wp-content/uploads/2023/01/Dual-sense-edge-header-scaled.jpg"
        title="green iguana"
      />
      <Box>
        <Box className="mt-2">
          <Typography
            component="p"
            className="text-bluetag bg-bluebg text-sm rounded-lg"
            sx={{ display: "inline-block", padding: "2px 6px" }}
          >
            Technology
          </Typography>
          <p className="text-2xl font-bold">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </p>
        </Box>
        <Box
          className="flex items-center mt-2"
          sx={{ justifyContent: "space-between" }}
        >
          <Box className="flex items-center">
            <Avatar
              alt="Remy Sharp"
              src="https://randomuser.me/api/portraits/women/49.jpg"
            />
            <p className="text-slate-500" sx={{ ml: 1 }}>
              Eric Smith
            </p>
          </Box>
          <p className="text-slate-600">August 20, 2022</p>
        </Box>
      </Box>
    </Box>
  );
}
