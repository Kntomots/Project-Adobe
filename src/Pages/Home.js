import Nav from '../NavBar'
import Cards from '../cards'
import Footter from '../footer'


export default function({id,title,body}){
    return (
    <>
    <Nav btnId='home'/>
    <Cards id={id} title={title} body={body}/>
    <Footter/>
    </>
    )


}