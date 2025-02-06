// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Share07IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Share07Icon(props: Share07IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.8 10.695l5.407 3.151M12.2 5.154l-5.4 3.15m9.825-4.346a2.375 2.375 0 11-4.75 0 2.375 2.375 0 014.75 0zM7.125 9.5a2.375 2.375 0 11-4.75 0 2.375 2.375 0 014.75 0zm9.5 5.542a2.375 2.375 0 11-4.75 0 2.375 2.375 0 014.75 0z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Share07Icon;
/* prettier-ignore-end */
