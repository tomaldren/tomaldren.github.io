import React, {useState, useCallback} from "react";
import ReactPlayer from "react-player"
import Fab from "@material-ui/core/Fab";
import Box from "@material-ui/core/Box";
import ImageViewer from 'react-simple-image-viewer';

function ViewMedia(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([]);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(0);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setIsViewerOpen(false);
    setImages([]);
  };

  function handleClick() {
    images.push(props.image);
    openImageViewer();
  }


  return (
    <div className="main main-container">
      <h1 className="main-title">{props.title}</h1>
      <h2 className="composer">{props.composer}</h2>
      <ReactPlayer className="video"
      width="100%"
      url={props.url}
      />
      <Box display="flex" justifyContent="center">
      <Fab size="medium" variant="extended" onClick={handleClick}>
        View Score
      </Fab>
      </Box>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
        />
      )}

    </div>
  );
}

export default ViewMedia;
