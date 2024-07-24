import React from 'react';

interface BioProps {
    imageUrl: string;
    bioText: string;
}

const Bio: React.FC<BioProps> = ({ imageUrl, bioText }) => {
    return (
        <div className="flex flex-row items-center p-8 m-8 border rounded-md bg-white shadow-md">
            <img src={imageUrl} alt={imageUrl} className="w-64 h-64 mr-8 rounded-lg object-cover" />
            <p className="text-left text-gray-700">{bioText}</p>
        </div>
    );
};
export default Bio;

