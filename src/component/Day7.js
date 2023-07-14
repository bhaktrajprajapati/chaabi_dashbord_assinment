import {BarChart,Bar,Tooltip,Legend,CartesianGrid,XAxis,YAxis} from "recharts";
import Tactive from "./Tactivty";
import Quize from "./Quiz";
const Day7=()=>{
    const data =[
       {name:"S" ,value:30},
       {name:"M" ,value:40},
       {name:"T" ,value:50},
       {name:"W" ,value:86},
       {name:"T" ,value:36},
       {name:"F" ,value:46},
       {name:"S" ,value:36},
       {name:"S" ,value:46},
       
       
    ];
    return(
        <>
        <div className="mainday7">
            <div className="day72"><Tactive/></div>
            <div className="day71"><Quize/></div>
            <div className="day7">
            
            <div className="last14"><p>daily training completions</p><p>last 7 days</p></div>

            <BarChart
          width={400}
          fill="#ffff"
          height={250}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 10,
            bottom: 15,
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
export default Day7;