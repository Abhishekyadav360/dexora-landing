'use client';
import React from 'react';

const RoadmapCard = ({ title, subtitle, points = [], className = '' }) => {
    return (
        <div className={`relative px-8 py-10 bg-[#111417] rounded-xl  ${className}`}>

            <h3 className="text-white text-2xl font-semibold !leading-[1.2]">{title}</h3>


            <p className="text-stone-300 text-md mt-2">{subtitle}</p>


            <ul className="mt-6 space-y-3">
                {points.map((point, index) => (
                    <li key={index} className="text-white text-md pl-4 border-l-[2px] border-[#5A5A5A]">
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoadmapCard;
