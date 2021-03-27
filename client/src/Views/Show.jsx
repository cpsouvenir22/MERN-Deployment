import { useState,useEffect } from "react";
import Axios from 'axios';
import { navigate, Link} from '@reach/router';

const Show = props => {
    const [pet, setPet] = useState (false);
    const [count, setCount]= useState (0)

    useEffect (() => {
        Axios.get (`http://localhost:8000/api/Pets/${props.id}`)
            .then (res => setPet(res.data.results))
            .catch (err => console.log(err))
    },[props])

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }

    

    const handleDestroyPet = id => {
        Axios.delete(`http://localhost:8000/api/Pets/${id}`)
            .then( res => setPet(res.data.results))
            .then(res=> navigate("/"))
            .catch (err => console.log(err))

    }

    return(
        <>
        
            <div className="d-flex flex-wrap justify-content-between col-11 p-4">
                <h2 className="card-title">Details About: {pet.name}</h2>
                <button className= "btn btn-danger btn-outline-dark "onClick={()=> handleDestroyPet(pet._id)}>Adopt {pet.name}</button>
            </div>
            
        <div className="card">
            
            <div className="card-body text-center">
                
                <h5 className="card-text text-left">Pet Type: {pet.type}</h5>
                <br/>
                <h5 className="card-text text-left">Description: {pet.description}</h5>
                <br/>
                <h5 className="card-text text-left">Skills: <br/>{pet.skill} <br/> {pet.skill2} </h5>
                
            </div>
        </div> 
        <button onClick= {handleIncrement}>Like {pet.name}</button> <h5>{count} Likes</h5>
        </>
    )
}

export default Show;