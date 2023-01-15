import styles from '../styles';
import { arrowUp } from '../assets';
import { useState } from 'react';

const GetStarted = () => {
    const [hoverColor, setHoverColor] = useState('text-gradient');
    const hoverTransistionOn = () => {
        setHoverColor('text-primary');
    };

    const hoverTransistionOff = () => {
        setHoverColor('text-gradient');
    };
    return (
        <div
            className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
        >
            <div
                onMouseEnter={() => hoverTransistionOn()}
                onMouseLeave={() => hoverTransistionOff()}
                className={`${styles.flexCenter} flex-col bg-primary hover:bg-inherit transition-all duration-300 ease-in-out w-[100%] h-[100%] rounded-full`}
            >
                <div className={`${styles.flexStart} flex-row`}>
                    <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
                        <span className={hoverColor}>Get</span>
                    </p>
                    <img
                        src={arrowUp}
                        alt='arrow'
                        className='w-[23px] h-[23px] object-contain'
                    />
                </div>
                <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                    <span className={hoverColor}>Started</span>
                </p>
            </div>
        </div>
    );
};

export default GetStarted;
