function App({ data }) {
  return (
    <CartProvider>
      <Header />
      <Product data={data} />
    </CartProvider>
  );
}
