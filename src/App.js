import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

import CustomImage from "./components/CustomImage";
import Loader from "./components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { GET_RECENT_API } from "./config";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getRecentImages();
  }, []);

  const getRecentImages = () => {
    axios.get(GET_RECENT_API).then((res) => {
      setImages([...images, ...res.data.photos.photo]);
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container m-20">
        <InfiniteScroll
          dataLength={images.length}
          next={getRecentImages}
          hasMore={true}
          loader={<Loader />}
        >
          <div className="image-wrapper">
            {images &&
              images.map((i) => {
                return <CustomImage data={i} key={i.id} />;
              })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default App;
