import React from 'react'

export default function ProjectCard(props) {
    return(
<>
<div class="card" style={{width: "18rem"}}>
    <img class="card-img-top" src={props.image} alt="Card image cap"/>
    <div class="card-body">
        <h5 class="card-title">{props.projectName}</h5>
        <p class="card-text">{props.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
</>
    )
}