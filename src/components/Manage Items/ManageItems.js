
import UseInventoryItems from '../../Hooks/UseInventoryItems/UseInventoryItems';
import ManageSingleItem from './ManageSingleItem/ManageSingleItem';


const ManageItems = () => {
   

  const [useInventoryItems, setUseInventoryItems] = UseInventoryItems();


  return (


    <div className="container">
      <div className="row align-items-center">
          <h1 className="text-center pt-4">We have items in stock: {useInventoryItems.length}</h1>
          <div style={{ height: "3px" , width:"50px" }} className="bg-primary  mx-auto "></div>

          <div className="" >
              {

                  useInventoryItems.map(useInventoryItem => <ManageSingleItem key={useInventoryItem._id}  useInventoryItem ={useInventoryItem}  ></ManageSingleItem>)
                
              }
              
             
          </div>
          
      </div>
    </div>
  );
};

export default ManageItems;