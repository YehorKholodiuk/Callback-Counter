function Fish(props){
    return (
        <div>
            <button onClick={props.plus}>PLUS</button>
            <button onClick={props.minus}>MINUS</button>
        </div>
    );
}
export default Fish;