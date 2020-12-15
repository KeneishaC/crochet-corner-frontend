import { useState } from 'react';
import { addCrochet } from "../../services/crochet"
import './CreateProject.css'

export default function CreateProject(props) {
    
    const [formState, setFormState] = useState({
        projectName: "",
        description: "",
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
        event.preventDefault();
        if(!formValid()) return;
        try {
          await addCrochet(formState);
          setFormState({
            projectName: "",
            description: "",
            image: ""
          })
          window.location.reload()
        } catch (err){
          alert(err.message);
        }
    }

    return (
        <main className="Main col-auto justify-content-center align-items-center row">
            <form onSubmit={handleSubmit} className="CreateProject align-middle">
            <h2>Add New</h2>
                <div>
                    <input className="form-control" value={formState.projectName} onChange={handleChange} type="text" name="projectName" placeholder="Name of Your Project"/>
                </div>
                <div>
                    <textarea className="form-control" style={{height: "187px"}} value={formState.description} onChange={handleChange} type="text" name="description" placeholder="Description" />
                </div>
                <div>
                    <input className="form-control" value={formState.image} onChange={handleChange} type="text" name="image" placeholder="image"/>
                </div>
                <div>
                    <input className="form-control btn"  type="submit" value="Add Project"/>
                </div>
            </form>
        </main>
        
    )
}
