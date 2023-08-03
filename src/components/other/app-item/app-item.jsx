const AppItem = (props) => {
  const { img, name, price, country } = props;
  const alt = "Photo_coffe";
  return (
    <>
      <div className="products__item">
        <div className="products__img">
          <img src={img} alt={alt} />
        </div>
        <div className="products__name">{name}</div>
        <div className="products__country">{country}</div>
        <div className="products__price">{price} $</div>
      </div>
    </>
  );
};

export default AppItem;
