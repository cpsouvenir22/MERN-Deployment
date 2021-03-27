import {Link} from '@reach/router';


    

    const PetCard = props => {
        const {id, title, status, handleStatus, handleTrash} = props;
    
        return(
            <div className="card col-10 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        status === 'unread' ?
                        <div className="card-footer">
                            <Link className="btn btn-success" to= {`/show/${id}`}>Read</Link>
                            <button 
                            onClick={() => handleStatus(id, status)}
                            className="btn-danger">Discard</button>
                            <button 
                            onClick= {() => handleTrash(id)}
                            className="btn-danger">Dump It</button>
                        </div> :
                        <div className="card-footer">
                            <button onClick={() => handleStatus(id, status)}className="btn-success">Undo</button>
                        </div>
                    }
                </div>
            </div>
        )
}

export default PetCard;