import FileUpload from '../Components/FileUpload';
import React from 'react';

class FileUploadPage extends React.Component {
    onSubmitFile(){
        alert("123");
    }

    onFileChange(){

    }

    render(){
        return (
            <FileUpload handleSubmission={this.onSubmitFile}
                        changeHandler={this.onFileChange} />
        )
    }
}

export default FileUploadPage;