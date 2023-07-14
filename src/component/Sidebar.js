import logo from '../icons/image1.png';
import { Sidebardata } from './Sidebardata';
import '../App.css'
function Sidebar(){
    return(
<div className='side1'>
    < div className="logo">
        <img src={logo} alt="" />
    </div>
    <div className="Sidebar">
       
    <ul className="Sidebarlist">
        {
            Sidebardata.map((val,key)=>{
                return(
                    <li className="row"
                    key={key}
                    onclick={()=>{
                        window.location.pathname=val.link;
                    }}>
                    <div id="icon"><img src={val.image} alt=""/></div>
                    <div id="title">{val.title}</div>
</li>
                )
            })
        }
    </ul>
        
        
    </div>
    </div>
    )
}
export default Sidebar;