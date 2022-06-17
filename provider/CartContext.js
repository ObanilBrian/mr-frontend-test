const CartContext = React.createContext([]);
const CartUpdateContext = React.createContext([]);

function useCart() {
  return React.useContext(CartContext);
}

function CartProvider({ children }) {
  const [cartItems, setCartItems] = React.useState([]);

  const handleAddToCart = (data) => {
    setCartItems((prev) => [...prev, data]);
  };

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
}
