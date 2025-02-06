// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcSharpCallIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcSharpCallIcon(props: IcSharpCallIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M56 41.227L41.947 39.6l-6.72 6.72a40.134 40.134 0 01-17.574-17.573L24.4 22 22.773 8H8.08C6.533 35.147 28.853 57.467 56 55.92V41.227z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcSharpCallIcon;
/* prettier-ignore-end */
