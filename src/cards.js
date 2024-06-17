import { useEffect, useState } from 'react';
import './index.css';
import { useNavigate } from "react-router-dom";
import Card from './card'




  
  
function TextExample() {
    const [items,setData] = useState([])
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();


    useEffect(() => {
        console.log('I rerender')
      fetch('/posts')
        .then((response) => response.json())
        .then((data) => {
            setData(data)        
            setLoading(false)
        })
        .catch((error) => console.error('Fetch error:', error));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
      }

   

  return (
    <div className="container mx-auto p-4">
        
        <div className='grid grid-cols-1 md:grid-cols-1 gap-4 mb-4'>

      <Card id={items[0].id} title = {items[0].title} body={items[0].body}/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {items.slice(1, 3).map((item) => (
         <Card id={item.id} title = {item.title} body= {item.body} />
        ))}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.slice(3,20).map((item) => (
            <Card id={item.id} title = {item.title} body= {item.body} />

        ))}
      </div>



      
     

    </div>
    
  )

      

}

export default TextExample;