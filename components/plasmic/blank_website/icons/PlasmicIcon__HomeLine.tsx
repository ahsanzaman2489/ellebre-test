// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HomeLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HomeLineIcon(props: HomeLineIconProps) {
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
        d={
          "M6.667 14.167h6.666M9.181 2.303L3.53 6.7c-.377.294-.566.441-.702.625-.12.163-.21.347-.265.542-.062.22-.062.46-.062.938v6.03c0 .933 0 1.4.182 1.756.16.314.414.569.728.728.357.182.823.182 1.757.182h9.666c.934 0 1.4 0 1.757-.182.314-.16.569-.414.728-.728.182-.357.182-.823.182-1.757v-6.03c0-.478 0-.718-.062-.938a1.665 1.665 0 00-.265-.542c-.136-.184-.325-.33-.702-.625L10.82 2.303c-.293-.227-.44-.341-.601-.385a.834.834 0 00-.436 0c-.161.044-.308.158-.6.385z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.667"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HomeLineIcon;
/* prettier-ignore-end */
