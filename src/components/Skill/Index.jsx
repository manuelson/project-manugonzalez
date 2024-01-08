import PropTypes from 'prop-types';

export function Skill({icon, text}) {

    if (icon && text) {
        return (
            <li className="skill-card rounded-3 p-3 col">
                {icon}
                <span className="justify-content-center px-sm-1 px-md-3 px-lg-3 px-xl-3 px-xxl-3">{text}</span>
            </li>
        )
    }
}

Skill.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string,
};