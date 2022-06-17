function MiniCartLineItem({ item }) {
  const formattedPrice = `$ ${item.price}.00`;
  return (
    <div className="item">
      <div>
        <img className="item__img" src={item.imageURL} />
      </div>
      <div className="item__info">
        <div>{item.title}</div>
        <div>
          {item.quantity}x <span className="item__price">{formattedPrice}</span>
        </div>
        {item.productOptions.map(({ option, value }) => (
          <div key={`cart-item-${value}`}>
            {option}: {value}
          </div>
        ))}
      </div>
    </div>
  );
}
