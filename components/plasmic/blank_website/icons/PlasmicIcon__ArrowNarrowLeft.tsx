// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowNarrowLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowNarrowLeftIcon(props: ArrowNarrowLeftIconProps) {
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

      <path
        d={"M16.667 10H3.333m0 0l5 5m-5-5l5-5"}
        stroke={"currentColor"}
        strokeWidth={"1.667"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowNarrowLeftIcon;
/* prettier-ignore-end */
