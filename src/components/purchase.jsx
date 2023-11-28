import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./purchase.css";

const Purchase = () => {
  const [orderDTO, setOrderDTO] = useState({
  itemsCountRequested: {},
  street: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
  firstName: "",
  lastName: "",
  email: "",
  unitPrice: {}, // unit price
  ccv: "",
  creditCardCompany: "",
  expirationDate: "",
  cardHolderName: "",
  cardNumber: ""
  });

  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/urban-threads/items?pageNumber=0&sizeOfPage=100")
      .then(response => response.json())
      .then(data => {
        // Assuming that the items are in the `content` array of the pageable JSON response
        const itemList = data.content || [];
        setItems(itemList);
        setOrderDTO(prevDTO => ({
          ...prevDTO,
          itemUnitPrices: itemList.reduce((acc, item) => {
            acc[item.id] = item.price;
            return acc;
          }, {}),
          itemsCountRequested: itemList.reduce((acc, item) => {
            acc[item.id] = 0;
            return acc;
          }, {}),
        }));
      });

    // Clean-up function not needed if you're not setting up any subscriptions or timers
  }, []); // Dependency array is empty, meaning this effect runs once on mount

  const handleQuantityChange = (itemId, quantity) => {
    setOrderDTO(prevDTO => {
      const newDTO = {
        ...prevDTO,
        itemsCountRequested: {
          ...prevDTO.itemsCountRequested,
          [itemId]: quantity,
        },
        itemUnitPrices: {...prevDTO.itemUnitPrices}
      };

      //localStorage.setItem('orderDTO', JSON.stringify(newDTO));

      return newDTO;
    });
  };





  const handleSubmit = (e) => {
    e.preventDefault();

    //read saved orderDTO from local storage
    const savedOrderDTOJSON = localStorage.getItem('orderDTO');
    const savedOrderDTO = savedOrderDTOJSON ? JSON.parse(savedOrderDTOJSON) : { itemsCountRequested: {} };

    // update saved orderDTO with new itemsCountRequested
    Object.keys(orderDTO.itemsCountRequested).forEach(itemId => {
      const quantity = orderDTO.itemsCountRequested[itemId];
      if (quantity > 0) { // 只处理数量大于0的物品
          savedOrderDTO.itemsCountRequested[itemId] += quantity;
          console.log("updated item id:", itemId, "quantity:", savedOrderDTO.itemsCountRequested[itemId]);
      }
    });

    // save updated orderDTO to local storage
    localStorage.setItem('orderDTO', JSON.stringify(savedOrderDTO));

    // navigate to cart page
    navigate("/cart", { state: { orderDTO: savedOrderDTO } });

    console.log("Submitting orderDTO:", savedOrderDTO);
  };


  return (
    <div className="container bg-beige">
      <form onSubmit={handleSubmit}>
        <div className="row">
          {items.map((item, index) => (
            <div className="product-item col-md-4" key={item.id}>
              <img
                // Use the first image from the images array, if available
                src={item.images?.[0] || "src/assets/placeholder.jpg"} // replace with placeholder if no image is available
                alt={item.itemName}
                className="img-fluid"
              />
              <h5>{item.itemName}</h5>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Stock: {item.stockQuantity}</p>
              <input
                type="number"
                min="0"
                max={item.stockQuantity}
                required
                value={orderDTO.itemsCountRequested[item.id] || 0}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                  /*{
                  const newBuyQuantity = [...order.buyQuantity];
                  newBuyQuantity[index] = parseInt(e.target.value, 10);
                  setOrder({ ...order, buyQuantity: newBuyQuantity });
                }}*/
              />
            </div>
          ))}
        </div>
        <button type="submit" className="custom-btn mt-4">
          Add to Shopping Cart
        </button>
      </form>
    </div>
  );
};

export default Purchase;
