import React, { useState } from 'react';
import { singleFileUpload } from '../../data/api';

const FileUploadPage = (props) => {
    const [singleFile, setSingleFile] = useState('');

    const SingleFileChange = (e) => {
        setSingleFile(e.target.files[0]);
    }

    const uploadSingleFile = async () => {
        const formData = new FormData();
        formData.append('file', singleFile);
        await singleFileUpload(formData);
        props.getSingle();
    }

    return (
        <div className='row mt-3'>
            <div className='col-6'>
                <div className='form-group'>
                    <label className='fs-5 fw-bold font-monospace mb-2'>Select a photo to upload</label>
                    <input type='file' className='form-control mb-3 w-75' onChange={(e) => SingleFileChange(e)} />
                </div>
                <div className='row'>
                    <div className='col-10'>
                        <button type='button' className='btn btn-success' onClick={() => uploadSingleFile()}>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileUploadPage;