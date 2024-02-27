const CardType = ({ title, image }) => {
  return (
    <div className="">
      <img src={image} alt="image" className="image" />
      <p className="">{title}</p>
    </div>
  );
};

export default CardType;
