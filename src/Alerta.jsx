function Alerta(props) {
    return (
        <div className={`text-center alert alert-${props.tipo}`} role="alert">
            {props.texto}
        </div>
    );
}
export default Alerta;