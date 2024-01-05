import PropTypes from 'prop-types';

export function Skill({icon, text}) {

    return (
        <li className="skill-card rounded-3 p-3 col">
            {icon}
            <span className="justify-content-center px-3">{text}</span>
        </li>
    )
}

Skill.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
};