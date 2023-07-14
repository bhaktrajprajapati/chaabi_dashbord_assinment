import {BarChart,Bar,Tooltip,Legend,CartesianGrid,XAxis,YAxis} from "recharts";
import Cstatus from "./Cstatus";
const Day14=()=>{
    const data =[
       {name:"3june" ,value:50},
       {name:"4 june" ,value:90},
       {name:"5june" ,value:110},
       {name:"6june" ,value:140},
       {name:"7june" ,value:230},
       {name:"8june" ,value:226},
       {name:"9june" ,value:250},
       {name:"10june" ,value:200},
       {name:"11june" ,value:120},
       {name:"12june" ,value:250},
       {name:"13 june " ,value:290},
       {name:"14 june" ,value:350},
       {name:"15june" ,value:385},
       {name:"16june" ,value:400},
    ];
    return(
        <>
        <div className="main14">
         <div className="day141"><Cstatus/></div>
        <div className="Day14">
          <div className="last14"><p>last 14 day activity worker in training</p><p>last 14 days</p></div>
            
            <BarChart
          width={630}
          fill="#ffff"
          height={270}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 10,
            bottom: 25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" stackId="a" fill="#1878F2" barSize={15} />
          <Bar dataKey="value" stackId="a" fill="#E7EFFF" />
        </BarChart>
        </div>
        </div>
        </>

    );
      
};
export default Day14;