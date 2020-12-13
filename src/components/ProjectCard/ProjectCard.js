import React from 'react'
import { Route } from 'react-router-dom'
import {  Link } from 'react-router-dom'
import { deleteOne } from '../../services/crochet'
import { useHistory } from 'react-router-dom'
import './ProjectCard'


export default function ProjectCard(props) {
    console.log(props.id)
    const history = useHistory()

   async function handleDelete(event) {
       console.log(event.id)
       console.log(event.key)
       console.log(event._id)
       event.preventDefault();
       try{
           history.push('/dashboard')
           await deleteOne(props.id)
           window.location.reload()
        } catch (err) {
            alert(err.message)
        }

   }
    
    return(
            <>
            <div className="card" key={props.id} id={props.id} style={{width: "20rem"}}>
                <div className="card-body" className="ProjectCard">
                <img className="card-img-top" src={props.image} alt="Card image cap"/>
                    <h5 className="card-title">{props.projectName}</h5>
                    <p className="card-text">{props.description}</p>
                <Link to={`/edit/${props.id}`} crochetData={props} >Edit</Link>
                <button  onClick={handleDelete}>X</button>
                </div>
            </div>
            </>
    )
}