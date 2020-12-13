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

    return (
        <main className="">
            <form onSubmit={handleUpdate} style={editPage}>
            <h2> Edit </h2>
                <div>
                    <input className="form-control" value={editState.projectName} type="text" name="projectName" onChange={handleChange} placeholder="Name of Your Project"/>
                </div>
                <div>
                    <textarea style={{height: "240px"}}  className="form-control" value={editState.description} type="text"  onChange={handleChange} name="description" placeholder="Description" />
                </div>
                <div>
                    <input className="form-control"  value={editState.image}  type="text" name="image"onChange={handleChange}  placeholder="image"/>
                </div>
                <div>
                    <input className="form-control btn"  type="submit" value="Edit Project"/>
                </div>

            </form>
        </main>
        
    )
}

const editPage = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}