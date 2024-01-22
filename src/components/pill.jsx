import React from "react";

const Pill = ({ isGreen }) => {
    const pillColor = isGreen ? "bg-green-400" : "bg-red-500";

    return (
        <div className={`w-14 h-4 rounded-full ${pillColor}`}>
            <div className="w-full h-4 rounded-full"></div>
        </div>
    );
};

export default Pill;
