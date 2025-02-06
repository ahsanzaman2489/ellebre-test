// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlaceholderIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlaceholderIcon(props: PlaceholderIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#w0iQOt2ruc57a)"}>
        <path
          d={"M10 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"}
          stroke={"currentColor"}
          strokeWidth={"1.667"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
      </g>

      <defs>
        <clipPath id={"w0iQOt2ruc57a"}>
          <path fill={"currentColor"} d={"M0 0h20v20H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default PlaceholderIcon;
/* prettier-ignore-end */
