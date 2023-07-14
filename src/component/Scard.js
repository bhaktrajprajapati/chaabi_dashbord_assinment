import  {Scarddata} from "../component/Scarddata"

import '../App.css'
function Scard(){
    return(

    <div className="Maincard">
       
    
        {
            Scarddata.map((val,key)=>{
                return(
                    <>
                   <div className='carddrow'>
                        <p>{val.title}</p>
                    <div className="Subdivi">
                    <div id="icon">
                        <  h2 id="btext">{val.nval}</h2>

                        <img id="cimg" src={val.imag} alt=""/>
                        <span id="spa1"><b>{val.numval}</b></span>
                    </div>
                    <div id="title">
                    <img src={val.image} alt=""margin className="graphic"/>
                    </div>
                    </div>
                    </div>
                    </>
                )
            })
        }
    
        
        
    </div>
   
    )
}
export default Scard;