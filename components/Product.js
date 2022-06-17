function Product({ data }) {
  const { handleAddToCart } = useCart();
  const [currentSizeOption, setSizeOption] = React.useState();

  const handleOptionClick = (size) => setSizeOption(size);
  const handleClickSubmit = () => {
    if (!currentSizeOption) {
      alert("Please select a valid size option.");
      return;
    }

    setSizeOption(null);
    return handleAddToCart({
      id: currentSizeOption,
      title: data.title,
      quantity: 1,
      price: data.price,
      imageURL: data.imageURL,
      productOptions: [
        {
          option: "Size",
          value: currentSizeOption,
        },
      ],
    });
  };

  return (
    <div className="product">
      <div className="wrapper">
        <div>
          <img src={data.imageURL} className="product__image" />
        </div>

        <form>
          <h1 className="product__name">{data.title}</h1>
          <div className="product__price">$ {data.price}.00</div>
          <p className="product__description">{data.description}</p>

          <div className="product__option">
            <label>
              SIZE<span className="required">*</span>{" "}
              {currentSizeOption && (
                <span className="product__value">{currentSizeOption}</span>
              )}
            </label>
            <div>
              {data.sizeOptions.map((option) => (
                <button
                  key={`option-${option.id}`}
                  onClick={() => handleOptionClick(option.label)}
                  className={currentSizeOption === option.label ? "active" : ""}
                  type="button"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <button
              className="product__submit"
              onClick={() => handleClickSubmit()}
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
