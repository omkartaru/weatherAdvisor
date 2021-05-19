import React from 'react'
import photo from "../assets/omkar.png"

const Creater = () => {
    return (
        <div>
            <h3 className="workheading">Omkar Taru</h3>
        
                    <div id="myphoto" > 
                      <img  src={photo} alt="" />
                    </div>
        
            <div className="contentCreater">
            <p>Creater</p><br />
            <p> <b>Technolgies Known :</b> HTML, CSS, Javascript, C, C++, React js, Node js, MongoDB</p>
            </div>
        </div>
    )
}

export default Creater
