// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StreamlineInstagramSolidIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StreamlineInstagramSolidIcon(
  props: StreamlineInstagramSolidIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.085 1.18a3.906 3.906 0 00-3.906 3.905v10.416a3.906 3.906 0 003.906 3.906h10.416a3.906 3.906 0 003.905-3.906V5.085A3.906 3.906 0 0015.5 1.181H5.085zm11.54 3.911a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm-6.33 2.082a3.12 3.12 0 100 6.24 3.12 3.12 0 000-6.24zm-4.622 3.12a4.62 4.62 0 119.24 0 4.62 4.62 0 01-9.24 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StreamlineInstagramSolidIcon;
/* prettier-ignore-end */
