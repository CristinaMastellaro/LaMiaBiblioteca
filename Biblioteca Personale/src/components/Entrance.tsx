import "../css/entrance.css";

const Entrance = () => {
  return (
    <section className="">
      <h1 className="mb-5 bg-dark bg-opacity-75 px-5 py-4 text-light rounded-5 border border-2">
        Biblioteca <br /> Cristina
      </h1>
      <div className="button-wrap mt-5">
        <button>
          <span className="text-light">Entra</span>
        </button>
        <div className="button-shadow"></div>
      </div>
      {/* <button>Entra</button> */}
    </section>
  );
};

export default Entrance;
