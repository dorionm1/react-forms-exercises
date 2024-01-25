import { useState } from "react";

export let boxCount = 0;

const NewBoxForm = ({ addBox }) => {

    const initialState = {
      boxwidth: "",
      boxheight: "",
      boxbgcolor: ""
    };

    const [formData, setFormData] = useState(initialState);
  
    const handleChange = evt => {
      const { name, value} = evt.target;
      setFormData(formData => ({
        ...formData,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addBox(formData.boxwidth, formData.boxheight, formData.boxbgcolor);
      setFormData(initialState);
      boxCount ++
      console.log(boxCount)
    };
  
    return (
      <div id="form-container">
      <form id="boxform" onSubmit={handleSubmit}>
        <div>
          <label for="boxwidth">Box Width:</label>
          <input name="boxwidth" placeholder="Box-Width" value={formData.boxwidth} onChange={handleChange}/>
        </div>
        <div>
          <label for="boxheight">Box Height:</label>
          <input name="boxheight" placeholder="Box-Height" value={formData.boxheight} onChange={handleChange} />
        </div>
        <div>
          <label for="boxbgcolor">Box Background Color:</label>
          <input name="boxbgcolor" placeholder="Box-BG Color" value={formData.boxbgcolor} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">Create Box!</button>
        </div>
      </form>
      </div>
      )
  }

export default NewBoxForm