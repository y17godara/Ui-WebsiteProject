import React from 'react';

export const Button_pri = ({ text, padding }) => {
    return (
        <>
            <div>
                <button
                    className={`
               ${padding || 'px-4 py-6'} button`}>
                    <span>{text}</span>
                </button>
            </div>

        </>
    )
}

export default Button_pri;
