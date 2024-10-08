function Konyvadat(props){
    return (
      <div className="card">
        <h3>{props.konyvAdat.cim}</h3>
        <p>{props.konyvAdat.szerzo}</p>
        <span>Ár: {props.konyvAdat.ar} Ft</span>
        <br />
        <button>Kosárba</button>
      </div>
    );
  }

  export default Konyvadat;