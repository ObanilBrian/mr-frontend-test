const CartContext = React.createContext([]);
const CartUpdateContext = React.createContext([]);

function useCart() {
  return React.useContext(CartContext);
}

function CartProvider({ children }) {
  const [cartItems, setCartItems] = React.useState([]);

  const handleAddToCart = (data) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === data.id
    );

    if (existingItemIndex > -1) {
      cartItems[existingItemIndex].quantity += 1;
      return setCartItems([...cartItems]);
    }

    return setCartItems((prev) => [...prev, data]);
  };

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
}
