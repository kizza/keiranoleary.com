import React from "react";
/* import styles from "./Logo.module.scss"; */

export default ({ className }: { className: string }) => {
  const colour = "#fff";

  return (
    <svg className={className} width="495px" height="73px" viewBox="0 0 495 73">
      <title>Keiran O'Leary</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="logo">
          <g id="Logo" transform="translate(0.000000, 9.000000)">
            <g id="Mark" transform="translate(0.000000, 3.000000)">
              <path
                d="M10.0526316,9 L34.4736842,9 L36,9 L36,12.0526316 L34.4736842,12.0526316 L10.0526316,12.0526316 L10.0526316,36.4736842 L10.0526316,38 L7,38 L7,36.4736842 L7,10.5263158 L7,9 L10.0526316,9 Z"
                id="Combined-Shape"
                stroke={colour}
                strokeWidth="2"
                fill={colour}
                strokeLinecap="square"
                transform="translate(21.500000, 23.500000) rotate(-45.000000) translate(-21.500000, -23.500000) "
              ></path>
              <path
                d="M81,44 L96,5"
                id="L"
                stroke={colour}
                strokeWidth="5"
                strokeLinecap="square"
              ></path>
              <path
                d="M45.592745,1.66944183 L43.5031527,7.73805859 C37.8737563,10.5085307 34,16.3018832 34,23 C34,32.3888407 41.6111593,40 51,40 C60.3888407,40 68,32.3888407 68,23 C68,15.5292828 63.1810606,9.18408912 56.4820394,6.90327655 L58.1103306,2.17437553 C66.7713624,5.13064517 73,13.3379345 73,23 C73,35.1502645 63.1502645,45 51,45 C38.8497355,45 29,35.1502645 29,23 C29,12.7155126 36.0569722,4.07926934 45.592745,1.66944183 Z"
                id="O"
                fill={colour}
              ></path>
              <path
                d="M49,9 L52.5452737,0.72769473"
                id="Apostrophe"
                stroke={colour}
                strokeWidth="4"
                strokeLinecap="square"
              ></path>
            </g>
          </g>
          <text
            id="Keiran-O’Leary"
            fontFamily="ErasITC-Light, Eras Light ITC"
            fontSize="64"
            fontWeight="normal"
            letterSpacing="0.233333305"
            fill={colour}
          >
            <tspan x="106.460417" y="57">
              Keiran O’Leary
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
};
