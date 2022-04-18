const VidBox = (props) => {
  function handleLinkClick(vid) {
    props.setClickedVideo(vid);
  }

  return (
    <a onClick={handleLinkClick(props.vid)}>
      <img
        src={`https://img.youtube.com/vi/${props.vid.id.videoId}/0.jpg`}
      ></img>
    </a>
  );
};

export default VidBox;
