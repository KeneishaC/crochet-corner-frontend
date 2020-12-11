import  CreateProject  from '../components/CreateProject/CreateProject'
import ProjectList from  '../components/ProjectList/ProjectList'

export default function DashboardPage(props) {
    return (
        <main className="Page">
            <h1>DashboardPage</h1>
        <div>
        <ProjectList crochetData={props.crochetData}/>
        </div>
        <div>
          <CreateProject />
        </div>
        </main>
    )
}
