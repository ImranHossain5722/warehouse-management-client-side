import { useEffect, useState } from "react";
import UseInventoryItems from "../../Hooks/UseInventoryItems/UseInventoryItems";
import ManageSingleItem from "./ManageSingleItem/ManageSingleItem";
import "./ManageItems.css";

const ManageItems = () => {
  const [useInventoryItems, setUseInventoryItems] = useState([]);

  // pagination State
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  // all items load  data
  useEffect(() => {
    fetch(
      `https://rocky-dawn-40302.herokuapp.com/inventoryItems?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setUseInventoryItems(data));
  }, [page, size]);

  // pagination count
  useEffect(() => {
    fetch("https://rocky-dawn-40302.herokuapp.com/inventoryImtesCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  //for delete
  const handelDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete items");
    if (proceed) {
      const url = `https://rocky-dawn-40302.herokuapp.com/inventoryItems/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
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

        <div className="managment-div">
          {useInventoryItems.map((useInventoryItem) => (
            <ManageSingleItem
              key={useInventoryItem._id}
              useInventoryItem={useInventoryItem}
              handelDelete={handelDelete}
            ></ManageSingleItem>
          ))}
          <div className="pageination m-5">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={page === number ? "selected" : ""}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
            <select onChange={(event) => setSize(event.target.value)}>
              <option value="5">5</option>
              <option value="10" selected>
                10
              </option>
              <option value="15">15</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
