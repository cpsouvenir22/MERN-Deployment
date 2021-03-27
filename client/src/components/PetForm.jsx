const PetForm = props => {
    const {inputs, handleInputChange, handleSubmit, submitValue, errors} = props;

    return(
        <div className="d-flex flex-wrap justify-content-start col-12">

            <form onSubmit= {handleSubmit} 
        className="col-6 mx-auto">
            <div className="form-group">
                <label htmlFor="name">Pet Name:</label>
                <input 
                    type="text"
                    name="name" className="form-control"
                    onChange= {handleInputChange}
                    value= {inputs.name}
                />
                <span className="text-danger">
                    {errors.name ? errors.name.message: ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="type">Pet Type:</label>
                <input 
                    type="text"
                    name="type" className="form-control"
                    onChange= {handleInputChange}
                    value= {inputs.type}
                />
                <span className="text-danger">
                {errors.type ? errors.type.message: ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="description">Pet Description:</label>
                <input 
                    type="text"
                    name="description" className="form-control"
                    onChange= {handleInputChange}
                    value= {inputs.description}
                />
                <span className="text-danger">
                    {errors.description ? errors.description.message: ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="skill">Skill 1:</label>
                <input 
                    type="text"
                    name="skill" className="form-control"
                    onChange= {handleInputChange}
                    value= {inputs.skill}
                />
                <span className="text-danger">
                    {errors.skill ? errors.skill.message: ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="skill2">Skill 2:</label>
                <input 
                    type="text"
                    name="skill2" className="form-control"
                    onChange= {handleInputChange}
                    value= {inputs.skill2}
                />
                <span className="text-danger">
                    {errors.skill2 ? errors.skill2.message: ""}
                </span>
            </div>
            <input type="submit" value={submitValue} className="btn btn-primary"/>
        </form>
        </div>
        
    )
}

export default PetForm;