import { useRef, useState } from "react";
import Box from "./Box";
import NewBoxForm, { boxCount } from "./NewBoxForm";

const BoxList = () => {
    const initialState = [{
        boxwidth: "",
        boxheight: "",
        boxbgcolor: ""
      }]
        
    const [boxs, setBoxs] = useState(initialState)
    const addBox = (boxwidth, boxheight, boxbgcolor) => {
        setBoxs(boxs => [...boxs, { boxwidth, boxheight, boxbgcolor}])
}

   return (
    <div>
        <NewBoxForm addBox={addBox}/>
        <h1>Boxes!</h1>
        <div id="box-list">
            <div id="box">
            {boxs.map(({ boxwidth, boxheight, boxbgcolor}) => <Box width={boxwidth} height={boxheight} color={boxbgcolor}/>)}
            </div>
        </div>
    </div>
   );
  }

  export default BoxList