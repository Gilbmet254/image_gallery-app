import React, { useState, useEffect, useRef } from 'react';

function Upload() {
    const cloudinaryRef = useRef(null);
    const widgetRef = useRef(null);
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (window.cloudinary) {
            cloudinaryRef.current = window.cloudinary;
            widgetRef.current = cloudinaryRef.current.createUploadWidget(
                {
                    cloudName: "dsgjl3auz",
                    uploadPreset: "feeo8vwk",
                },
                function (error, result) {
                    if (result.event === "success") {
                        setPost(result.info.secure_url);
                    }
                }
            );
        }
    }, []);

    const handleUploadButtonClick = () => {
        if (widgetRef.current) {
            widgetRef.current.open();
        }
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'feeo8vwk'); // Your Cloudinary upload preset

            fetch('https://api.cloudinary.com/v1_1/dsgjl3auz/image/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                setPost(data.secure_url);
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
        }
    };

    return (
        <div>
            <button onClick={handleUploadButtonClick}>
                Upload from Device
            </button>
            <input type="file" accept="image/*" onChange={handleFileInputChange} style={{ display: 'none' }} id="fileInput" />
            <label htmlFor="fileInput">
                Upload from Drive
            </label>
            {post && (
                <div>
                    <p>Uploaded Image:</p>
                    <img src={post} alt="Uploaded" style={{ maxWidth: '100%' }} />
                </div>
            )}
        </div>
    );
}

export default Upload;
