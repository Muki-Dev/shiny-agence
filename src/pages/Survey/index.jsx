import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
// import { Loader } from "../../utils/style/Atoms";

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

// const QuestionContent = styled.span`
//   margin: 30px;
// `

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

function Survey(){
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;
   
    useEffect(() => {
        fetch('http://localhost:8000/survey')
        .then((response) => response.json()
        .then(({surveyData}) => console.log(surveyData))
        .catch((error) => console.log(error))
    
    )
    },[])
    return(
        <SurveyContainer>
            <QuestionTitle>Question { questionNumber }</QuestionTitle>
                <LinkWrapper>
                    <Link to={`/survey/${prevQuestionNumber}`}>Precedent</Link>
                    {
                        questionNumberInt === 10 ? (
                            <Link to="/results">Results</Link>
                        ):(<Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>)
                    }
                </LinkWrapper>
        </SurveyContainer>
    )
}

export default Survey;