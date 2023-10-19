
const Item = ({ title, description }) => {
  return (
    <div className="pokemon_details__description">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Item;
