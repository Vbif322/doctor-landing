import { type FC } from "react";

const Cross: FC = () => {
    return (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_166_627" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
                <path d="M0 11.3222C0 17.5178 5.02256 22.6443 11.2182 22.6443C17.4138 22.6443 22.4364 17.5178 22.4364 11.3222C22.4364 5.12653 17.4138 0 11.2182 0C5.02256 0 0 5.12653 0 11.3222Z" fill="white" />
            </mask>
            <g mask="url(#mask0_166_627)">
                <path d="M11.2173 4.71729V17.9246" stroke="#FDFDFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.67383 11.322H17.7599" stroke="#FDFDFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    );
};

export default Cross;
