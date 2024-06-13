import { useEffect, useState } from 'react';
import Nav from '../NavBar';
import Card from '../card';
import Footer from '../footer'
import '../index.css'

export default function DetailView() {
    const queryParameters = new URLSearchParams(window.location.search);
    const param = queryParameters.get("param");
    console.log(param)
    

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [parameters,setParam] =useState(param)

    useEffect(() => {
        if(parameters == null){
           setParam(null)
        }else{
        fetch(`/posts/${param}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
                setLoading(false);
            });
    }}, [param]);
    
    if(parameters == null){
        return (
            <>
            <Nav />
            <div className='footer'>
                <div className="mx-auto my-auto text-center bg-red-500">
                    <h2>You have to click on card first</h2>
                </div>
               
            </div>
            <Footer classname='f' />
        </>
        )
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>Error loading data</div>;
    }

    return (
        <>

        <Nav btnId={'card'}/>
        <div className="container mx-auto p-4">
        
        <div className='grid grid-cols-1 md:grid-cols-1 gap-4 mb-4'>

            <Card id={data.id} title={data.title} body={data.body} />
        </div>
        </div>
        <Footer/>

        </>
    );
}
