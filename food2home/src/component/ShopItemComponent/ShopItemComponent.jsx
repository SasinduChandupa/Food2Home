import React from 'react';
import './ShopItemComponent.css';

const ShopItemComponent = () => {
  const vegetables = [
    {
      name: "Apple",
      image: "https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537_1280.jpg",
      quantity: "1 Kg",
      price: "390 LKR",
      originalPrice: "460 LKR"
    },
    {
      name: "Banana",
      image: "https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_1280.jpg",
      quantity: "4 Pcs",
      price: "30 LKR",
      originalPrice: ""
    },
    {
      name: "Potato",
      image: "https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_640.jpg",
      quantity: "1 Kg",
      price: "110 LKR",
      originalPrice: ""
    },
    {
      name: "Broccoly",
      image: "https://cdn.pixabay.com/photo/2016/06/11/15/33/broccoli-1450274_640.png",
      quantity: "1KG",
      price: "1200 LKR",
      originalPrice: ""
    },
    {
      name: "Tomato",
      image: "https://cdn.pixabay.com/photo/2017/08/15/12/37/tomato-2643774_640.jpg",
      quantity: "1 Kg",
      price: "80 LKR",
      originalPrice: "120 LKR"
    },
    {
      name: "Onion",
      image: "https://cdn.pixabay.com/photo/2023/09/29/12/23/onions-8283710_640.jpg",
      quantity: "1 Kg",
      price: "130 LKR",
      originalPrice: ""
    },
    {
      name: "Cabbage",
      image: "https://cdn.pixabay.com/photo/2022/01/18/16/34/savoy-6947478_640.jpg",
      quantity: "1 Kg",
      price: "70 LKR",
      originalPrice: "98 LKR"
    },
    {
      name: "Cucumber",
      image: "https://cdn.pixabay.com/photo/2015/07/17/13/44/cucumbers-849269_640.jpg",
      quantity: "1 Kg",
      price: "75 LKR",
      originalPrice: ""
    },
    {
      name: "Pumpkin",
      image: "https://cdn.pixabay.com/photo/2018/09/24/20/53/pumpkin-3700805_640.jpg",
      quantity: "1 Kg",
      price: "125 LKR",
      originalPrice: "140"
    },
    {
      name: "Basil leaves",
      image: "https://cdn.pixabay.com/photo/2018/05/16/10/38/basil-3405405_640.jpg",
      quantity: "1 Kg",
      price: "375 LKR",
      originalPrice: ""
    },
    {
      name: "Carrot",
      image: "https://cdn.pixabay.com/photo/2015/03/14/14/08/carrots-673201_640.jpg",
      quantity: "1 Kg",
      price: "75 LKR",
      originalPrice: "90"
    },
    {
      name: "Garlic",
      image: "https://cdn.pixabay.com/photo/2023/08/26/03/20/garlic-8214036_640.jpg",
      quantity: "1 Kg",
      price: "95 LKR",
      originalPrice: ""
    },
    {
      name: "Aubergine",
      image: "https://cdn.pixabay.com/photo/2017/08/05/15/43/vegetable-2584412_640.jpg",
      quantity: "1 Kg",
      price: "78 LKR",
      originalPrice: ""
    },
    {
      name: "Bell peper",
      image: "https://cdn.pixabay.com/photo/2014/10/22/21/54/bell-peppers-499068_640.jpg",
      quantity: "1 Kg",
      price: "187 LKR",
      originalPrice: "190"
    },
    {
      name: "Beans",
      image: "https://cdn.pixabay.com/photo/2018/09/25/20/09/bush-beans-3702999_640.jpg",
      quantity: "1 Kg",
      price: "145 LKR",
      originalPrice: "165"
    },
    {
      name: "Mushrooms",
      image: "https://cdn.pixabay.com/photo/2024/03/07/10/30/mushrooms-8618284_640.jpg",
      quantity: "1 Kg",
      price: "325 LKR",
      originalPrice: "350"
    }
    
  ];

  return (
    <div className="shop-container">
      <h2 className="section-title">Shop Now</h2>
      <div className="shop-items">
        {vegetables.map((item, index) => (
          <div key={index} className="shop-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-quantity">{item.quantity}</p>
              <div className="item-pricing">
                <span className="item-price">{item.price}</span>
                {item.originalPrice && (
                  <span className="item-original-price">{item.originalPrice}</span>
                )}
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopItemComponent;