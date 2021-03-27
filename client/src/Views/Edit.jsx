import {useState, useEffect} from 'react';
import Axios from 'axios';
import PetForm from "../components/PetForm";
import { navigate } from '@reach/router';

const Edit = props => {
    const [pet, setPet]= useState(false);

    useEffect (()=> {
        Axios.put(`http://localhost:8000/api/Pets/${props.id}`)
            .then(res=> setPet (res.data.results))
            .catch(err => console.log(err))
                
                
    }, [props])

    const [errors,setErrors] = useState({
        name:"",
        type: "",
        description: "",
        skill: "",
        skill2: ""
    })

    const handleChange = e => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        Axios.put(`http://localhost:8000/api/Pets/${props.id}`, pet)
            .then(res => navigate('/'))
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            } 
                
                )}
    return(
        <>
        <h2 className= "d-flex flex-wrap justify-content-center col-12">Edit {pet.name}</h2>
        
        {
        
            pet ?
        <PetForm
            inputs={pet}
            title= "Edit"
            submitValue="Edit Pet"
            handleInputChange= {handleChange}
            handleSubmit= {handleSubmit}
            errors= {errors}
        /> : 
        <h2>Loading</h2>}
        </>

        
        
    )
}

export default Edit;