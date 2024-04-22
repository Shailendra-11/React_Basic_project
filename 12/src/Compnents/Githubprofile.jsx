import './github.css'
import Card from './Card'
import { useState , useEffect } from 'react'
const Githubprofile = () => {
    // https://api.github.com/users
  const [user, setuser] = useState('shailendra-11')
  const [data , setdata] = useState([])
  const [loading , setLoading] = useState(true)
  const [error ,seterror] =useState()

  const FetchGithupProfile = async () =>{
      try{
        setLoading(false);
      const response = await fetch(`https://api.github.com/users/${user}`)
      const  Data = await response.json()
       setdata(Data)
       setLoading(true)
    }
    catch (e){
         seterror(e)
         console.log(e);

    }
  }

  function handleSubmit() {
      FetchGithupProfile()
      console.log("fet");
  }

  useEffect(()=>{
       FetchGithupProfile();
  }, [])
    console.log(data);


    if(!loading){
        return <h1>Loading......</h1>
    }
    if(error){
        return <h1>Error...</h1>
    }

  return (
    <div className='github-profile-container'>
      <div className="input-wrapper">
         <input type="text" 
          placeholder='Search Github Username...'
         value={user}
         onChange={(event) => setuser(event.target.value)}
         />
          <button onClick={handleSubmit}>Search</button>
      </div>
      { data !== null ? <Card user={data}/> : null}
    </div>
  )
}

export default Githubprofile;
