'use client';
import React from 'react';


const FeatureNCard = ({ title, description,  className = '', ...props }) => {
    return (
        <div
            className={`relative px-8 py-10 bg-[#111417] rounded-xl ${className}`}
            {...props}
        >
            <div>
                <h3 className="text-white text-2xl mt-6 text-left">{title}</h3>
                <p className="text-stone-300 text-lg mt-4 text-left">{description}</p>
            </div>
        </div>
    );
};

export default FeatureNCard;
