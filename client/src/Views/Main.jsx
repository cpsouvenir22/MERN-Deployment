import {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';


const Main = props => {
    
    const [pets,setPets] = useState (false);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/Pets")
            .then (res => setPets(res.data.results))
            .catch(err => console.log(err))
    },[])

    
    
    return(
        
        
        
        pets ?
        
        <div className="d-flex flex-wrap justify-content-around col-12 mx-auto">
            <div className="d-flex flex-wrap justify-content-end col-12">
                <Link  to= "/new">Add a Pet to the Shelter</Link>
            </div>
            <div className="d-flex flex-wrap justify-content-start col-12">
                <h4>These Pets are looking for a good home</h4>
            </div>
            
            <br/>
            
            <table className="table table-bordered col-10 mx">
                
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((p,i) => {
                            return <tr key ={i}>
                                        <td>{p.name}</td>
                                        <td>{p.type}</td>
                                        
                                        <td>
                                        <Link to= {`/show/${p._id}`} > Details </Link> |
                                        <Link to= {`/edit/${p._id}`} > Edit </Link>
                                        
                                        </td>
                                            

                                        
                            </tr>
                        })
                    }
                </tbody>
            </table> 
            </div>
            :
            <h2>Loading</h2>
    )
}

export default Main;
