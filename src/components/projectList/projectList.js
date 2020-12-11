// import { useState } from 'react'
import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

export default function ProjectList(props){
    // const projects = props.crochetData.forEach(project, idx => {
    //     return (
    //     <ProjectCard projectName={project.idx.projectName}  image={project.idx.image} description={project.idx.description} ></ProjectCard>
    // )
    // })
    // const projects = props.crochetData.forEach((project, idx) => {
    //     console.log(project, idx)
    //     })
   
    console.log(typeof props.crochetData)
    // console.log(Object.keys(props.crochetData))
    // console.log(props.crochetData, 'here is the data')
return (
    <>
    <h2>All Crochet Creations</h2>
    <div>
    {props.crochetData.map((project, idx) => (
        <ProjectCard projectName={project.projectName}  image={project.image} description={project.description} ></ProjectCard>
    ))
}
    </div>
    </>
)
}