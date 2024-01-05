import {LightModeToggle} from "../Toggle/Index.jsx";

export function NavBar() {

    return (
        <header className="mt-4 w-90 justify-content-center d-flex justify-content-between container">
            <a href="/" >
                <svg
                    className="logo rounded-5"
                    viewBox="0 0 32 32"
                    id="icon"
                    xmlns="http://www.w3.org/2000/svg"
                ><path className="cls-1" d="M4,4V28H28V4ZM23.9385,9.6865,22.6514,10.92a.3766.3766,0,0,0-.1431.3613v9.0674a.3765.3765,0,0,0,.1431.3613l1.257,1.2339v.271h-6.323v-.271L18.8877,20.68c.1279-.128.1279-.1656.1279-.3609V12.99l-3.62,9.1958H14.906L10.6907,12.99v6.1631a.8505.8505,0,0,0,.2334.7071l1.6936,2.0547v.2709H7.8154v-.2709L9.509,19.86a.82.82,0,0,0,.2183-.7071V12.0264A.6231.6231,0,0,0,9.5239,11.5L8.0186,9.6865v-.271h4.6743l3.613,7.9239,3.1765-7.9239h4.4561Z"/><path id="inner-path" className="cls-2" d="M9.7273,12.0266A.6246.6246,0,0,0,9.524,11.5L8.0186,9.6863V9.4154H12.693l3.613,7.9238,3.1764-7.9238h4.4561v.2709L22.6513,10.92a.3763.3763,0,0,0-.143.3612v9.0676a.3763.3763,0,0,0,.143.3612l1.2571,1.2341v.2709H17.5856v-.2709L18.8878,20.68c.1279-.1279.1279-.1656.1279-.3612V12.99l-3.62,9.1955h-.4893L10.6907,12.99v6.1629a.8506.8506,0,0,0,.2334.7074l1.6936,2.0543v.2709H7.8154v-.2709L9.509,19.86a.82.82,0,0,0,.2183-.7074Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" className="cls-2"/></svg>
            </a>
            <div className="d-flex gap-3">
                <LightModeToggle></LightModeToggle>
                <button className="rounded-circle button-menu align-items-center">
                    <svg
                        className="icon-menu"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M4 6H20M4 12H20M4 18H20" strokeWidth="2"/>
                    </svg>
                </button>
            </div>
        </header>
    )
}