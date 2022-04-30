import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className=' d-flex justify-content-center align-items-center' style={{height:'700px'}}  >
            <h2>Loading</h2>  <Spinner animation="border" variant="secondary" />
        </div>
    );
};

export default Loading;