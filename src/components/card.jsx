import React from "react";
import PropTypes from "prop-types"
import '../index.css'

const Card = ({ bg,children, ...props }) => {
    return (
        <div className="h-screen  flex items-center"  {...props}>
            <div className= " flex justify-around items-center flex-wrap h-full w-full">
                <div className="w-1/2 h-3/4 hidden md:block">
                    <img src={bg} alt="background" className="h-full w-full "/>
                </div>
                <div className=" bg-white   rounded-lg   px-4 md:px-20 py-4 md:py-8 box-shadow-custom shadow-2xl border-2">
                    {children}
                </div>
            </div>
        </div>
    )
}
Card.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
};

export default Card;