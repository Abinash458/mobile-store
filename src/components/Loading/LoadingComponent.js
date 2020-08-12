import React from 'react';

const Loading = () => {
    return (
        <div className="m-auto">
            <div className="col-12 py-5 d-flex justify-content-center">
                <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            </div>
        </div>
    );
}

export default Loading;

