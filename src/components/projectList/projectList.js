// import { useState } from 'react'
import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

export default function ProjectList(props){
// console.log(props.crochetData[1]._id)
return (
    <>
    <h2>All Crochet Creations</h2>
    <div>
    {props.crochetData.map((project) => (
        <ProjectCard key={project._id} id={project._id} projectName={project.projectName}  image={project.image} description={project.description} ></ProjectCard>
    ))
}
    </div>
    </>
)
}

const listStyle = {
    // marginTop: "100px",
    // marginBottom: "100px",
    // overflow: "hidden",
    // overflow: "scroll",
    // height: "800px"

}