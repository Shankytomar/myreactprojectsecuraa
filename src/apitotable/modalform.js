import React from 'react';
import { useState } from 'react';
const ModalForm =()=>{

    //state for comp
    const [modal, setModal] = useState(false);
    //component
    const Myform = () => {
      return (
        <>
        <form>
        <div class="form-group">
            <label for="inputAddress2">name</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
           </div> 
           <div class="form-group">
            <label for="inputAddress2">Rotaional period</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
            </div>
            <div class="form-group">
            <label for="inputAddress2">Orbital period</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
            </div>
            <div class="form-group">
            <label for="inputAddress2">Diameter</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
            </div>
            <div class="form-group">
            <label for="inputAddress2">Climate</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
            </div>
            <div class="form-group">
            <label for="inputAddress2">gravity</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
            </div>
            <div class="form-group">
            <label for="inputAddress2">terrain</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
            </div>
            <div class="form-group">
            <label for="inputAddress2">surface water</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
            </div>
            <div>
          <button type="submit" class="btn btn-primary">
            Save
          </button>
          <button type="submit" class="btn btn">
            cancel
          </button>
          </div>
        </form>
      </>
      )
    
    }

    return(
        
        <>
   {/* <button onClick={setModal(true)}></button>
   { modal && <Myform />} */}
   <Myform />
   </>
    );
}
export default ModalForm;