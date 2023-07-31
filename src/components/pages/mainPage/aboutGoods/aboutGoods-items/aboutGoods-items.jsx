import AboutGoodsItem from "../aboutGoods-item/aboutGoods-item";

const AboutGoodsItems = ({ dataItems }) => {
  const elements = dataItems.map((elem) => {
    const { id, ...elemProps } = elem;
    return <AboutGoodsItem key={id} {...elemProps} />;
  });
  return (
    <>
      <div className="aboutGoods__header">Our best</div>
      <div className="aboutGoods__items">{elements}</div>
    </>
  );
};

export default AboutGoodsItems;
