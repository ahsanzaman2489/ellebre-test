// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6 0a6 6 0 106 6 6.007 6.007 0 00-6-6zm0 10.667a4.666 4.666 0 110-9.333 4.666 4.666 0 010 9.333zM9.778 6a.667.667 0 01-.667.667H6A.667.667 0 015.333 6V2.889a.667.667 0 011.334 0v2.444H9.11A.667.667 0 019.778 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
