import React from 'react';

export const Button_sec = ({ text, padding }) => {
    return (
        <>
            <div>
                <button
                    className={`
               ${padding || 'px-4 py-6'} button-2`}>
                    <span>{text}</span>
                </button>
            </div>

        </>
    )
}

export default Button_sec;
