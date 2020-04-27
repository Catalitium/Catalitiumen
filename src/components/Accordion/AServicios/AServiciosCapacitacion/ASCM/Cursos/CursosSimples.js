import React from 'react'

export const CursosSimples = () => {
    return (


        <div style={{display: 'flex', justifyContent: 'center'}} >

        <div class="row">
          <div class="column" >
            <h6 align="center">Training:</h6>
              <ol type="1" > 
                <li>Introductory</li>
                <li>Intermediate</li>
              </ol>
            </div>
            
            <div class="column" >
              <h6 align="center" >Duration:</h6>
              <ul style={{ listStyleType: "none" }}>
                <li>1 Hour</li>
                <li>1 Day</li>
              </ul>
            </div>
            </div>
        </div>
    )
}

export default CursosSimples;