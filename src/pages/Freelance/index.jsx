import styled from 'styled-components';
import colors from '../../utils/style/colors';
import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card';
 
const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]

const CardsContainer = styled.div`
    display: grid;
    gap: 24;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
`
const PageTitle = styled.h1`
    font-size: 30px;
    color: black;
    text-align: center;
    padding-bottom: 30px:
`

const PageSubTitle = styled.h2`
    font-size: 20px;
    color: ${colors.secondary};
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px; 
`

 

function Freelance(){
    return(
        <div>
        
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubTitle>
                 Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubTitle>
            <CardsContainer>
            {
                freelanceProfiles.map((profile,index) => (
                    <Card 
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.title}
                        picture={profile.picture}

                    />
                ))
            }
            </CardsContainer>
     </div>
    )
    
}

export default Freelance;