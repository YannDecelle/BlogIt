import { Box } from "@mui/material";
import MediaCard from "./card";
import { Link } from "react-router-dom";

export default function Posts() {
  return (
    <Box className="flex justify-center">
      <Box
        className="flex flex-wrap justify-center"
        sx={{ gap: { xs: 2, md: 3 } }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Link to="/blog" key={index} style={{ textDecoration: 'none' }}>
            <Box sx={{ flex: "0 1 auto" }}>
              <MediaCard />
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
