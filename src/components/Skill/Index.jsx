import PropTypes from 'prop-types';

export function Skill({icon, text}) {

    if (icon && text) {
        return (
            <li className="skill-card rounded-3 p-3 col">
                {icon}
                <span className="justify-content-center px-sm-2 px-md-3 px-lg-3 px-xl-3 px-xxl-3">{text}</span>
            </li>
        )
    } else {
        return (
            <li className="rounded-3 p-3 col"></li>
        )
    }
}

Skill.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
};