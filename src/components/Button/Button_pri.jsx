import React from 'react';
import "./Button.css";

export const Button_pri = ({ text, padding }) => {
    return (
        <>
            <div>
                <button
                    className={`
                    ${padding || 'px-4 py-6'} button`
                    }>
                    {text}
                </button>
            </div>

        </>
    )
}

export default Button_pri;
