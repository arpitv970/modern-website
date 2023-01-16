import React from 'react';

const Button = ({ styles }) => {
    return (
        <button
            type='button'
            className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-lg hover:rounded-2xl transition-all duration-300 ease-in-out ${styles}`}
        >
            Get Started
        </button>
    );
};

export default Button;
