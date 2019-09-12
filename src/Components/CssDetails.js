import React from 'react';
// import './DefinitionDetails.css';

function CssDetails (props) {
    console.log('props is: ', props)
    return (
        <div className="card">
            <h4>{props.data.title}</h4>
            {/* Setting text with html markup so it displays correctly */}
            <p dangerouslySetInnerHTML={{__html: props.data.description}}></p>
            {/* <div className="card">
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
            </div> */}
        </div>
    );
}

export default CssDetails;