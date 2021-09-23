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

  // get data from redux
  const { photos, page } = useSelector((state) => state.images);

  // for search input value
  const [search, setSearch] = useState("");

  // at first load get images
  useEffect(() => {
    getImages();
  }, []);

  // search the image after 1 sec
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      getImages();
      saveHistory(search);
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [search]);

  // if search value is there then exectue search query or else
  // get recent images
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
