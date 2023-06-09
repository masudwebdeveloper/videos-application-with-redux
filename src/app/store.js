import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videosSlice";
import videoReducer from "../features/video/videoSlice";
import tagsReducer from "../features/tags/tagsSlice";
import relatedVideosReducer from "../features/relatedVideos/relatedVidoesSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    relatedVideos: relatedVideosReducer,
    videos: videosReducer,
    video: videoReducer,
    tags: tagsReducer,
    filter: filterReducer,
  },
});
