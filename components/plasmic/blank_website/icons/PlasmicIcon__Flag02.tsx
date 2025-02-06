// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Flag02IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Flag02Icon(props: Flag02IconProps) {
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

      <path
        d={
          "M3 11.25s.75-.75 3-.75S9.75 12 12 12s3-.75 3-.75V3s-.75.75-3 .75-3.75-1.5-6-1.5S3 3 3 3m0 13.5v-15"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Flag02Icon;
/* prettier-ignore-end */
