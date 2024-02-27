import CardType from "../atoms/card";
import image from "../../assets/images/imageTest.png";
export const Content = () => {
  return (
    <>
      <div className="annonce">
        <p>Découvrez nos nouvelles recettes !</p>
      </div>
      <div className="content">
        <div className="card">
          <CardType
            className=""
            title="Nos hamburger faits maison"
            image={image}
          />
        </div>
        <div className="card">
          <CardType className="" title="Nos hamburger" image={image} />
        </div>
        <div className="card">
          <CardType className="" title="Nos hamburger" image={image} />
        </div>
        <div className="card">
          <CardType className="" title="Nos hamburger" image={image} />
        </div>
        <div className="card">
          <CardType className="" title="Nos hamburger" image={image} />
        </div>
        <div className="card">
          <CardType className="" title="Nos hamburger" image={image} />
        </div>
      </div>
    </>
  );
};
