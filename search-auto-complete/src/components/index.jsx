import {useState, useEffect} from 'react'

export default function SearchAutoComplete(){
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)

    async function fetchUsers() {
        try{
          const response = await fetch('https://dummyjson.com/users')
          const data = await response.json()
          
          console.log(data)
        }catch(error) {
            console.log(error)
            setError(error)
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return(
        <div className="search-autocomplete-container">
          <input
           type="text"
           placeholder="Search Users here..."
           />
        </div>
    )
}