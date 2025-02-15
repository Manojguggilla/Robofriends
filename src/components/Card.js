import React from "react";

const Card = (props)=>{
    const{id, name, email}=props;
    return(
        <div className="dib bg-light-green ma3 pa3 tc br3 grow custom-shadow">
            <img alt="robots" src={'http://robohash.org/' + id } />
            
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;