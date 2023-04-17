import React from 'react';
import "./Button.css";

export const Button_sec = ({ text, padding }) => {
    return (
        <>
            <div>
                <button
                    className={`
               ${padding || 'px-4 py-6'} button-2`
               }>
                {text}
                </button>
            </div>

        </>
    )
}

export default Button_sec;
