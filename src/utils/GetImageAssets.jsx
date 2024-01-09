import PropTypes from "prop-types";
import {Skill} from "../components/Skill.jsx";

export function GetImageAssets(asset) {

    return new URL(`../assets/${asset}`, import.meta.url).href
}

Skill.propTypes = {
    asset: PropTypes.string
};