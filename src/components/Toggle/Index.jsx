import { useState, useEffect } from "react";

export const LightModeToggle = () => {
    const [isLight, setIsLight] = useState(false);

    const handleToggle = () => {
        setIsLight(!isLight)
        localStorage.setItem('is_light', !isLight);
    }

    useEffect(() => {
        if (localStorage.getItem('is_light') === 'true') {
            setIsLight(true)
            document.body.classList.add('light');
        } else {
            setIsLight(false)
            document.body.classList.remove('light');
        }
    }, [isLight]);

    const lightIcon = () => {
        return (
            <a className="rounded-circle button-menu d-flex justify-content-center align-items-center align-content-center" onClick={handleToggle}>
                <svg
                    className="icon-menu"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1C274C"/>
                </svg>
            </a>
        )
    }

    const darkIcon = () => {
        return (
            <a className="rounded-circle button-menu d-flex justify-content-center align-items-center align-content-center" onClick={handleToggle}>
                <svg
                    className="icon-menu"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="12" cy="12" r="5"  strokeWidth="1.5"/>
                    <path d="M12 2V4"  strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M12 20V22"  strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M4 12L2 12"  strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M22 12L20 12" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M19.7778 4.22266L17.5558 6.25424" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M4.22217 4.22266L6.44418 6.25424" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M6.44434 17.5557L4.22211 19.7779"  strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M19.7778 19.7773L17.5558 17.5551"  strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </a>
        )
    }

    return isLight ? lightIcon() : darkIcon()
};