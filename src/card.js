import { useNavigate } from "react-router-dom";
import Photo from './photo.js'
import './index.css'
import AnotherComp from './Pages/SingleCard.js'


 const  Car =  ({id, title, body})=> {
    
    
    const navigate = useNavigate();

    
    const handleCardClick = () => {
        console.log(`Card with id ${id} clicked`);
        navigate("/card?param="+id);
        
    };


return(
    
        
          <div className='bg-gray-200 rounded-xl' key={id} onClick={() => handleCardClick()} >
            <div className='p-8 flex-1'>
              <div className=''>
              <h3>Post list {id}</h3>
              <p className='tw-full max-w-96'>{title}</p>
              </div>
              <div> 
                <Photo className="text-center mt-4" id={id} />
                <p className='text-center mt-4'>{body}</p>
              </div>
            </div>
          </div>

)

}
export default Car