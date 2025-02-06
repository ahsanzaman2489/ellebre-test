// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Send01IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Send01Icon(props: Send01IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#lZRA7RsEpJqma)"}>
        <path
          d={
            "M7.875 10.125L15.75 2.25m-7.78 8.121l1.971 5.069c.174.446.26.67.386.734a.375.375 0 00.346 0c.125-.064.212-.287.387-.734l4.942-12.666c.158-.402.236-.604.193-.733a.375.375 0 00-.237-.236c-.128-.043-.33.035-.733.192L2.56 6.94c-.446.174-.669.261-.734.387a.375.375 0 000 .346c.065.125.289.212.735.385L7.63 10.03c.09.036.136.053.174.08a.375.375 0 01.087.088.816.816 0 01.08.174z"
          }
          stroke={"currentColor"}
          strokeWidth={"2"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
      </g>

      <defs>
        <clipPath id={"lZRA7RsEpJqma"}>
          <path fill={"currentColor"} d={"M0 0h18v18H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Send01Icon;
/* prettier-ignore-end */
