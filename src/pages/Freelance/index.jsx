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

function Freelance(){
    return(
        <div>
        
            <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
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
     </div>
    )
    
}

export default Freelance;