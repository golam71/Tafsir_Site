export const TafsirCard = ({ name, writer, id, onClick }) => {
  return (
    <div
      id={id}
      className="TafsirCard bg-grey-300 flex flex-col align-middle m-5 text-white py-5 rounded-lg shadow-lg border-2 border-transparent"
      onClick={() => onClick(id)}
    >
      <h2 className="text-lg text-center font-bold">{name}</h2>
      <p className="text-sm text-center">{writer}</p>
    </div>
  );
};
