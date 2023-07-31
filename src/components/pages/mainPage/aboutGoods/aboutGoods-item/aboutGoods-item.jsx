const AboutGoodsItem = (props) => {
  const { img, name, price } = props;
  const alt = "Photo_coffe";
  return (
    <>
      <div className="aboutGoods__item">
        <div className="aboutGoods__img">
          <img src={img} alt={alt} />
        </div>
        <div className="aboutGoods__name">{name}</div>
        <div className="aboutGoods__price">{price} $</div>
      </div>
    </>
  );
};

export default AboutGoodsItem;
