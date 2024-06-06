import TwitterIcon from "@mui/icons-material/Twitter";
import { FacebookOutlined, Instagram, YouTube } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Posts from "../Components/grid";

export default function HomePage() {
  const styles = {
    largeIcon: {
      width: 48,
      height: 48,
    },
  };

  return (
    <>
      <section className="flex justify-center mt-16">
        <div className="flex justify-center bg-gray-100 w-2/3 rounded-md p-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-4xl mb-4">Welcome to Our Blog</h1>
            <p className="text-xl text-slate-600 mb-4">
              Explore our latest articles on technology, travel, and more.
            </p>
            <div className="flex justify-center mb-4">
              <TwitterIcon style={styles.largeIcon} />
              <FacebookOutlined style={styles.largeIcon} />
              <Instagram style={styles.largeIcon} />
              <YouTube style={styles.largeIcon} />
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center mt-12">
        <div className="w-2/3">
          <h1 className="text-2xl font-bold mb-4 ml-32">Recent Posts</h1>
          <Posts />
        </div>
      </section>

      <section className="flex justify-center mt-12 mb-12">
        <div className="flex flex-col items-center text-center w-2/3 bg-gray-100 rounded-md p-8">
          <h2 className="font-bold text-2xl mb-4">About Our Blog</h2>
          <p className="text-xl text-slate-600">
            Our blog is dedicated to sharing insights on technology and travel.
            We aim to provide valuable information and engaging stories that
            inspire and educate our readers. Join us on this journey and stay
            updated with our latest posts!
          </p>
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
