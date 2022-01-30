import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDo }) {
    const parms = useParams();
    const myToDo = toDo.find((toDo) => toDo.id === parseInt(parms.id));
    return (
        <>
            <h1>{myToDo?.text}</h1>
            <h5>Created at: {myToDo?.id}</h5>
        </>
    );
}

function mapStateToProps(state) {
    return { toDo: state };
}

export default connect(mapStateToProps)(Detail);
