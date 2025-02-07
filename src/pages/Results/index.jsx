import { useContext } from "react";
import { SurveyContext } from "../../utils/context";
function Results(){
    const { answers } = useContext(SurveyContext)
    console.log(answers)
    return(
             <h1>Results Page 🚀</h1>
        )
}

export default Results;