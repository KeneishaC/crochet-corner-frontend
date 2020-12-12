import { useState } from 'react';
import { update } from "../../services/crochet"
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'

export default function EditPage (props) {
    
    const history = useHistory()

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

    async function handleUpdate(event) {
        try{
            history.push('/dashboard')
            await update (props.id)
            window.location.reload()
         } catch (err) {
             alert(err.message)
         }
    }



    // async function handleSubmit(event) {
    //     event.preventDefault();
    //     if(!formValid()) return;
    //     try {
    //       await update(formState);
    //       setFormState({
    //         projectName: "",
    //         description: "",
    //         image: ""
    //       })
    //     } catch (err){
    //       alert(err.message);
    //     }
    // }

    return (
        <main>
            <h2> Edit </h2>
            <form onClick={handleUpdate}>
                <div>
                    <input value={props.crochetData.projectName} onChange={handleChange} type="text" name="projectName" placeholder="Name of Your Project"/>
                </div>
                <div>
                    <input value={props.crochetData.description} onChange={handleChange} type="text" text-area="" name="description" placeholder="Description" />
                </div>
                <div>
                    <input value={props.crochetData.image} onChange={handleChange} type="text" name="image" placeholder="image"/>
                </div>
                <div>
                    <input type="submit" value="Add Project"/>
                </div>

            </form>
        </main>
        
    )
}