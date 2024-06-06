import TwitterIcon from "@mui/icons-material/Twitter";
import {
  FacebookOutlined,
  Instagram,
  YouTube,
  Image,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Posts from "../../Components/grid";

export default function ProfilePage() {
  const styles = {
    largeIcon: {
      width: 48,
      height: 48,
    },
  };

  return (
    <>
      <section className="flex justify-center">
        <div className="flex justify-center bg-gray-100 w-2/3">
          <div className="rounded-md mt-8">
            <div className="flex justify-center items-center">
              <Avatar
                alt="Jonathan Doe"
                src="https://randomuser.me/api/portraits/women/49.jpg"
                sx={{ width: 64, height: 64, mr: 2 }}
              />
              <div className="flex flex-col justify-center">
                <p className="font-bold text-xl">Jonathan Doe</p>
                <p className="text-slate-500 text-sm">Collaborator & Editor</p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <p className="text-center text-slate-600 text-xl w-1/3">
                Meet Jonathan Doe, a passionate writer and blogger with a love
                for technology and travel. Jonathan holds a degree in Computer
                Science and has spent years working in the tech industry,
                gaining a deep understanding of the impact technology has on our
                lives.
              </p>
            </div>
            <div className="flex justify-center mt-6 mb-8">
              <TwitterIcon style={styles.largeIcon} />
              <FacebookOutlined style={styles.largeIcon} />
              <Instagram style={styles.largeIcon} />
              <YouTube style={styles.largeIcon} />
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center mt-12 mb-12">
        <div className="w-2/3">
          <h1 className="text-2xl font-bold mb-4 ml-32">Latest Posts</h1>
          <Posts />
        </div>
      </section>
      <section className="flex justify-center mt-12 mb-12">
        <button
          type="button"
          className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          New Post
        </button>
      </section>
    </>
  );
}
