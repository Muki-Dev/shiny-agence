import { Outlet,Link } from "react-router-dom";
function Survey(){
    return(
        <div>
            <h1>Questionnaire🧮</h1>
            <Link to="client">Questionaire Client</Link>
            <Link to="freelance">Questionaire Freelance</Link>
            <Outlet />
        </div>
    )
}

export default Survey;