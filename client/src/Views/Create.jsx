import {useState} from 'react';
import Axios from 'axios';
import PetForm from "../components/PetForm";
import { navigate, Link } from '@reach/router';

const Create = props => {
    const [pet, setPet] = useState({
        name:"",
        type: "",
        description: "",
        skill: "",
        skill2: ""
    })

    const [errors, setErrors] = useState({
        name:"",
        type: "",
        description: "",
        skill: "",
        skill2: ""
    })

    const handleInputChange = e => {
        
        setPet({
            ...pet,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/Pets', pet)
            .then(res=> navigate("/"))
            .catch(err=> {
                    setErrors(err.response.data.errors);
                    console.log(err);
            })}
            
    
    return (

        <div>
            
            
            <div className="d-flex flex-wrap justify-content-start col-12 mx-3">
                <h4>Know a pet needing a home?</h4>
            </div>
            
            
            <PetForm
                inputs= {pet}
                handleInputChange= {handleInputChange}
                handleSubmit={handleSubmit}
                errors= {errors}
                submitValue="Submit"
            />
        </div>
    )
}

export default Create;