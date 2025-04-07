import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, selectedSize) => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart!");
      return;
    }

    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (!updatedCart[itemId]) {
        updatedCart[itemId] = {};
      }

      if (!updatedCart[itemId][selectedSize]) {
        updatedCart[itemId][selectedSize] = 1;
      } else {
        updatedCart[itemId][selectedSize] += 1;
      }

      return updatedCart;
    });

    toast.success("Item added to cart!");
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          totalCount += cartItems[productId][size];
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = (itemId, size, quantity) => {
    const cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const productId in cartItems) {
      const itemInfo = products.find((product) => product._id === productId);
      if (!itemInfo) continue;

      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          totalAmount += itemInfo.price * cartItems[productId][size];
        }
      }
    }

    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
export { ShopContextProvider };
