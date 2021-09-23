import React from "react";

import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

import CustomImage from "../components/CustomImage";
import Loader from "../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

import { useDispatch, useSelector } from "react-redux";
import {
  getHistory,
  getRecentImages,
  saveHistory,
} from "../redux/actions/images";

function Home() {
  const dispatch = useDispatch();

  const { photos, page } = useSelector((state) => state.images);

  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      getImages();
      saveHistory(search);
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [search]);

  const getImages = () => {
    if (search) {
      dispatch(getRecentImages(page, search));
    } else {
      dispatch(getRecentImages(page));
    }
  };

  return (
    <div>
      <Navbar setSearch={setSearch} search={search} />
      <div className="container m-20">
        <InfiniteScroll
          dataLength={photos.length}
          next={getImages}
          hasMore={true}
          loader={<Loader />}
        >
          <div className="image-wrapper">
            {photos &&
              photos.map((i) => {
                return <CustomImage data={i} key={i.id} />;
              })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Home;
