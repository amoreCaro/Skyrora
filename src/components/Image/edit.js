import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { imageUrl, altText, caption } = attributes;

    const [imageSrc, setImageSrc] = useState(imageUrl || '');
    const [alt, setAlt] = useState(altText || '');
    const [captionText, setCaptionText] = useState(caption || '');

    const onSelectImage = (media) => {
        setImageSrc(media.url);
        setAttributes({ imageUrl: media.url });
    };

    return (
        <div>
            <MediaUploadCheck>
                <MediaUpload
                    onSelect={onSelectImage}
                    allowedTypes={['image']}
                    render={({ open }) => (
                        <Button onClick={open} isPrimary>
                            {imageSrc ? 'Change Image' : 'Upload Image'}
                        </Button>
                    )}
                />
            </MediaUploadCheck>

            {imageSrc && (
                <img src={imageSrc} alt={alt} style={{ maxWidth: '100%' }} />
            )}

            <TextControl
                label="Alt Text"
                value={alt}
                onChange={(value) => {
                    setAlt(value);
                    setAttributes({ altText: value });
                }}
            />

            <TextControl
                label="Caption"
                value={captionText}
                onChange={(value) => {
                    setCaptionText(value);
                    setAttributes({ caption: value });
                }}
            />
        </div>
    );
}
