import "./scrollUp.scss";
import ScrollUpReveal from "../../../Functions/ScrollUpReveal";
import { useEffect } from "react";

export default function ScrollUp() {
    useEffect(() => {
        ScrollUpReveal();
    }, [])

    return (
        <div id = "scrollup-div">
            <div id = "scroll-button-div">
                <button type = "button" className = "hidden" id = "scroll-button" tabIndex = {-1}>
                    <img id = "scroll-button-svg" src = "svgs/scrollUp.svg" alt = "ScrollIcon"></img>
                </button>
            </div>
        </div>
    )
};