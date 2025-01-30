"use client"
import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { Button } from '@mui/material';

const cloudupload = ({ onFileUrlChange }) => {
    const handleSuccess = (result) => {
        const url = result.info.secure_url;
        onFileUrlChange(url);
        console.log('Upload success:', result);
    };

    return (
        <CldUploadWidget uploadPreset="content_file" onSuccess={handleSuccess}>
            {({ open }) => (
                <Button variant='contained' className='bg-slate-500 mb-3' onClick={() => open()}>
                    Upload
                </Button>
            )}
        </CldUploadWidget>
    );
};

export default cloudupload;
