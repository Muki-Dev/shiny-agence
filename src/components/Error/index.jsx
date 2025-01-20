import styled from "styled-components";
import colors from "../../utils/style/colors";

const ErrorWrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.backgroundLight};
    align-items: center;
`

const ErrorTitle = styled.h1`
    font-weight: 300:
`

const ErrorSubTitle = styled.h2`
    font-weight: 300;
    colors: ${colors.secondary}
`
const Illustration = styled.img`
    max-width: 800px;
`
function Error(){
    return(
        <ErrorWrapper>
             <ErrorTitle>Oups...</ErrorTitle>
             <Illustration src="https://github.com/atoulmet/assets/blob/master/404.svg?raw=true" />
             <ErrorSubTitle>
                 Il semblerait que la page que vous cherchez n’existe pas
             </ErrorSubTitle>

        </ErrorWrapper>
    )
}

export default Error;