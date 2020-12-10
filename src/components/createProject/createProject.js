import { useState } from 'react';

export default function createProject(props) {
    
    const [formState, setFormState] = useState({
        projectName: "",
        desscription: "",
        image: ""
    })


    function formValid() {
        return !!(formState.projectName && formState.description && formState.image)
    }

    function handleChange(event) {
      setFormState(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value
      }))
    }

    async function handleSubmit(event) {
        event.preventDefault()
        this.setFormState({projectName:"", description:"", image:""})
    }

    return (
        <main>
            <h2>Add a new project Here</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input value={formState.projectName} onChange={handleChange} type="text" name="projectName" placeholder="Name of Your Project"/>
                </div>
                <div>
                    <input value={formState.description} onChange={handleChange} type="text" text-area="" name="description" placeholder="Description" />
                </div>
                <div>
                    <input value={formState.image} onChange={handleChange} type="img" name="image" placeholder="image"/>
                </div>
                <div>
                    <input type="submit" value="Add Project"/>
                </div>
            </form>
        </main>
        
    )
}