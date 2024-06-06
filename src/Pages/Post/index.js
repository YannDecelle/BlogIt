import { Avatar } from "@mui/material";
import { Box } from "@mui/material";
import { CardMedia } from "@mui/material";

export default function Post() {
  const styles = {
    blogimage: {
      width: '100%',
      height: 462,
    },
  };
  return (
    <>
      <div className="flex justify-center mt-16">
        <div className="w-2/5 ">
          <section>
            <p className="bg-bluetag text-bluebg inline-block px-2 py-1 rounded-lg mb-2 font-bold">
              Technology
            </p>
            <h1 className="font-bold text-4xl">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h1>
            <Box className="flex items-center mt-4 mb-4">
              <Box className="flex items-center">
                <Avatar
                  sx={{ width: 28, height: 28, mr: 2 }}
                  alt="Remy Sharp"
                  src="https://randomuser.me/api/portraits/women/49.jpg"
                />
                <p className="text-slate-500" sx={{ ml: 1 }}>
                  Eric Smith
                </p>
              </Box>
              <p className="text-slate-600 ml-4">August 20, 2022</p>
            </Box>
          </section>
          <section>
            <CardMedia
            className="mt-8 mb-8"
              component="img"
              sx={{ ...styles.blogimage }}
              image="https://cdn.mobilesyrup.com/wp-content/uploads/2023/01/Dual-sense-edge-header-scaled.jpg"
              title="green iguana"
            />
            <p className="text-xl">
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels. One of
              the most rewarding aspects of traveling is immersing yourself in
              the local culture and customs. This includes trying local cuisine,
              attending cultural events and festivals, and interacting with
              locals. Learning a few phrases in the local language can also go a
              long way in making connections and showing respect.
              <br />
              <br />
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels. One of
              the most rewarding aspects of traveling is immersing yourself in
              the local culture and customs. This includes trying local cuisine,
              attending cultural events and festivals, and interacting with
              locals. Learning a few phrases in the local language can also go a
              long way in making connections and showing respect.
              <br />
              <br />
              <p className="font-bold  text-2xl">Research Your Destination</p>
              <br />
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels. One of
              the most rewarding aspects of traveling is immersing yourself in
              the local culture and customs. This includes trying local cuisine,
              attending cultural events and festivals, and interacting with
              locals. Learning a few phrases in the local language can also go a
              long way in making connections and showing respect.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
