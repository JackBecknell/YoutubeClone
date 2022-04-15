

  return (
    <div>
      {fake_videos[0].items.map((vid, index) => (
        <img src={`https://img.youtube.com/vi/${vid.id.videoId}/0.jpg`}></img>
      ))}
    </div>
  );
};

export default HomePage;
