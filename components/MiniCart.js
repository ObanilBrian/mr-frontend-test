function MiniCart() {
  const { cartItems } = useCart();

  if (cartItems.length < 1) {
    return (
      <div className="minicart">
        <div>No item found in cart...</div>
      </div>
    );
  }

  return (
    <div className="minicart">
      {cartItems.map((item, index) => (
        <MiniCartLineItem key={`line-item-${index}`} item={item} />
      ))}
    </div>
  );
}
