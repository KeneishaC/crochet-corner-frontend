import  CreateProject  from '../components/CreateProject/CreateProject'
import ProjectList from  '../components/ProjectList/ProjectList'

export default function ProjectPage(props) {
    return (
        <main className="Page">
        <div>
          <CreateProject />
        </div>
        <div>
        <ProjectList crochetData={props.crochetData}/>
        </div>
        </main>
    )
}
