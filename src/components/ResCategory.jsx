import ItemsList from "./ItemsList";

const ResCategory = ({ data, showItems, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };

  return (
    <div className="rescategory-accordian">
      <button className="accordian-button" onClick={handleClick}>
        <span>{data.title + " (" + data.itemCards.length + ")"}</span>
        <span className="accordian-arrow">⬇️</span>
      </button>
      <div>{showItems && <ItemsList items={data.itemCards} />}</div>
    </div>
  );
};

export default ResCategory;
