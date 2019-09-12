import React from 'react';

function DomDetails(props) {
    console.log('props is: ', props)
    return (
        <div className="card">
            <h4>{props.data.title}</h4>
            <p dangerouslySetInnerHTML={{__html: props.data.description}}></p>
            {/* <div className="card"> */}
                {/* {props.data.images.map((value, index) => {
                    return (
                        <div className="card-body">
                            <p>{value.text}</p>
                            <div className="def-img large">
                                <img src={value.imgSrc} alt={value.imgAlt} />
                            </div>
                        </div>
                    );
                })} */}
            {/* </div> */}
        </div>
    );
}

export default DomDetails;