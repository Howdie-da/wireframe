import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-cyan-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button 
            type={type}
            className={`px-4 py-2.5 rounded-lg font-medium focus:outline-none transition-colors duration-200 hover:bg-black hover:text-cyan-300 focus:ring-4 focus:ring-cyan-800 ${bgColor} ${textColor} ${className}`} 
            {...props}
        >
            {children}
        </button>
    );
}