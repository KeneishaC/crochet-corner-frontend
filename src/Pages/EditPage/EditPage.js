import { useState, useEffect } from 'react';
import { update } from "../../services/crochet"
import { showOne } from '../../services/crochet'
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'

export default function EditPage (props) {
    console.log(props)

    const history = useHistory()

    const [editState, setEditState] = useState(
        []
    )

    // function formValid() {
    //     return !!(formState.projectName && formState.description && formState.image)
    // }

    useEffect(() => {
        getProject()
    }, [props.match.params.id] )

    async function getProject() {
        const projectData = await showOne(props.match.params.id);
        setEditState(projectData);        
    }

    function handleChange(event) {
        setEditState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    async function handleUpdate(event) {
        event.preventDefault()
        console.log(editState)
        try{
            history.push('/project')
            await update (editState, props.match.params.id)
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
            <form onSubmit={handleUpdate}>
                <div>
                    <input value={editState.projectName} type="text" name="projectName" onChange={handleChange} placeholder="Name of Your Project"/>
                </div>
                <div>
                    <input value={editState.description} type="text" text-area="" onChange={handleChange} name="description" placeholder="Description" />
                </div>
                <div>
                    <input value={editState.image}  type="text" name="image"onChange={handleChange}  placeholder="image"/>
                </div>
                <div>
                    <input type="submit" value="Edit Project"/>
                </div>

            </form>
        </main>
        
    )
}