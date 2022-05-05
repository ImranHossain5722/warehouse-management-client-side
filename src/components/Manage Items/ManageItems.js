import UseInventoryItems from "../../Hooks/UseInventoryItems/UseInventoryItems";
import ManageSingleItem from "./ManageSingleItem/ManageSingleItem";

const ManageItems = () => {
  const [useInventoryItems, setUseInventoryItems] = UseInventoryItems();

  const handelDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete items");
    if (proceed) {
      const url = `https://rocky-dawn-40302.herokuapp.com/inventoryItems/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = useInventoryItems.filter(
            (useInventoryItem) => useInventoryItem._id !== id
          );
          setUseInventoryItems(remaining);
        });
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <h1 className="text-center pt-4">
          We have items in stock: {useInventoryItems.length}
        </h1>
        <div
          style={{ height: "3px", width: "50px" }}
          className="bg-primary  mx-auto "
        ></div>

        <div className="">
          {useInventoryItems.map((useInventoryItem) => (
            <ManageSingleItem
              key={useInventoryItem._id}
              useInventoryItem={useInventoryItem}
              handelDelete={handelDelete}
            ></ManageSingleItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
