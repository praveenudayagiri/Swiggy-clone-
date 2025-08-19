const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-text title"></div>
            <div className="shimmer-text line"></div>
            <div className="shimmer-text line short"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
