/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from 'react';
import ColorThief from 'colorthief';

interface ImageComponentProps {
    imageUrl: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imageUrl }) => {
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const colorThief = new ColorThief();
        const imageElement = imageRef.current;
        imageElement!.crossOrigin = 'Anonymous';

        if (imageElement) {
            const loadImage = async () => {
                const dominantColor = await getColorFromImage(imageElement, colorThief);
                console.log(dominantColor);
            };

            loadImage();
        }
    }, []);

    const getColorFromImage = (image: HTMLImageElement, colorThief: ColorThief): Promise<number[]> => {
        return new Promise((resolve) => {
            image.addEventListener('load', () => {
                const dominantColor = colorThief.getColor(image);
                resolve(dominantColor);
            });
        });
    };

    return (
        <div>
            <img ref={imageRef} src={imageUrl} alt="Imagem" />
        </div>
    );
};

export default ImageComponent;
