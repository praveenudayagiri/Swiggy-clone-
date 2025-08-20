import ItemsList from "./ItemsList";

const ResCategory = ({ data, showItems, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };

  return (
    <div className="rescategory-accordian">
      <div className="accordian-header">
        <button className="accordian-title" onClick={handleClick}>
          {data.title + " (" + data.itemCards.length + ")"}
        </button>
        <button className="accordian-icon" onClick={handleClick}>
          ⬇️
        </button>
      </div>
      <div>{showItems && <ItemsList items={data.itemCards} />}</div>
    </div>
  );
};

export default ResCategory;
