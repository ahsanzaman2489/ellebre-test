// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Star01IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Star01Icon(props: Star01IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.992 2.446c.163-.33.245-.496.356-.549a.354.354 0 01.304 0c.111.053.193.218.356.55l1.549 3.137a.775.775 0 00.107.184.37.37 0 00.11.08c.048.022.102.03.21.046l3.464.506c.365.054.547.08.631.17a.354.354 0 01.095.29c-.016.121-.149.25-.413.507l-2.506 2.44c-.078.077-.117.115-.142.16a.356.356 0 00-.042.13.775.775 0 00.021.213l.591 3.447c.063.364.094.546.035.654a.354.354 0 01-.246.179c-.121.022-.284-.064-.61-.235l-3.098-1.63a.774.774 0 00-.196-.085.355.355 0 00-.136 0 .756.756 0 00-.196.086L5.14 14.355c-.327.171-.49.257-.61.235a.354.354 0 01-.247-.18c-.059-.107-.028-.289.035-.653l.59-3.447a.7.7 0 00.022-.213.354.354 0 00-.042-.13.775.775 0 00-.142-.16L2.24 7.367c-.264-.257-.396-.386-.413-.508a.354.354 0 01.094-.29c.085-.089.267-.115.632-.169l3.465-.506a.765.765 0 00.208-.046.354.354 0 00.11-.08.775.775 0 00.108-.184l1.549-3.138z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Star01Icon;
/* prettier-ignore-end */
