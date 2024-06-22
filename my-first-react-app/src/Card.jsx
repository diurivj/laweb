export function Card(props) {
  return (
    <div
      className='card'
      onClick={() => alert(`Le diste click a ${props.name}`)}
    >
      <img src={props.img} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}
