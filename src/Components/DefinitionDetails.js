import React from 'react';
// import './DefinitionDetails.css';

function DefinitionDetails(props) {
    console.log('props is: ', props)
    return (
        <div>
            <h4>{props.data.word}</h4>
            {/* Setting text with html markup so it displays correctly */}
            <p dangerouslySetInnerHTML={{__html: props.data.definition}}></p>
            <div className="card">
                {props.data.images.map((value, index) => {
                    return (
                        <div className="card-body">
                            <p>{value.text}</p>
                            <div className="def-img large">
                                <img src={value.imgSrc} alt={value.imgAlt} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DefinitionDetails;