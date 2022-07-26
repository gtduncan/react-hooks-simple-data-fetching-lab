import { useState, useEffect } from 'react'

// create your App component here
const App = () => 
{
    const [dog, setDog] = useState('')
    useEffect(() =>
    {
        const getDog = fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setDog(data.message)
        })
    }, [])
    if(!dog)
    {
        return <p>Loading...</p>
    }
    else{
        return(<div>
            <img src={dog} alt="A Random Dog"></img>
        </div>) 
    }
    
}

export default App