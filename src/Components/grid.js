import { Box } from "@mui/material";
import MediaCard from "./card";

export default function Posts() {
  return (
    <Box className="flex justify-center">
      <Box
        className="flex flex-wrap justify-center"
        sx={{ gap: { xs: 2, md: 3 } }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Box key={index} sx={{ flex: "0 1 auto" }}>
            <MediaCard />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
