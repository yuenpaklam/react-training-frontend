import React from 'react';

export default class FileUpload extends React.Component {

    render(){
        const {
            changeHandler,
            handleSubmission,
            testing
        } = this.props;

        return (
            <div>
                <input type="file" name="file" onChange={changeHandler} />
                <div>
                    {testing}
                    <button onClick={handleSubmission}>Submit</button>
                </div>
            </div>
        );
    }
}