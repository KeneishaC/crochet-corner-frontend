import  CreateProject  from '../components/CreateProject/CreateProject'
import ProjectList from  '../components/ProjectList/ProjectList'

export default function ProjectPage(props) {
    return (
        <main className="Page" style={projectStyle}>
        <div>
          <CreateProject />
        </div>
        <div>
        <ProjectList crochetData={props.crochetData}/>
        </div>
        </main>
    )
}

const projectStyle = {
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "space-evenly",
  // height: "800px",
  // marginTop: "90px",
  marginBottom: "100px",
  overflow: "scroll",
  overflow: "hidden",
}