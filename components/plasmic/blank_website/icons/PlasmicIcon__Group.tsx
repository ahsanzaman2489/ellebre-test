// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.22 7.827h10.435c0-.903-.12-1.777-.344-2.61H9.22v2.61zm0-5.218h8.968A10.055 10.055 0 0015.88 0H9.22v2.609zm.435 15.218a9.957 9.957 0 006.225-2.174H3.43a9.957 9.957 0 006.225 2.174zm-8.532-4.784h17.065a9.94 9.94 0 001.123-2.608H0a9.94 9.94 0 001.123 2.608z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
