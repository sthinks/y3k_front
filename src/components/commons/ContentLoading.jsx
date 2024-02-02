import React from 'react';
import ReactLoading from 'react-loading';

export default class ContentLoading extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "2rem" }}>
                <ReactLoading {...this.props} />
            </div>
        )
    }
}