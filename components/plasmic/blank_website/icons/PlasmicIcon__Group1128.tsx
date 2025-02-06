// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1128IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1128Icon(props: Group1128IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7 9.975a2.441 2.441 0 01-1.768-.769A2.693 2.693 0 014.5 7.35c0-.696.263-1.364.732-1.856A2.441 2.441 0 017 4.725c.663 0 1.299.277 1.768.769.469.492.732 1.16.732 1.856 0 .345-.065.686-.19 1.005-.126.318-.31.607-.542.851a2.496 2.496 0 01-.811.57A2.417 2.417 0 017 9.975zM7 0C5.143 0 3.363.774 2.05 2.153.737 3.53 0 5.4 0 7.35 0 12.863 7 21 7 21s7-8.137 7-13.65c0-1.95-.738-3.819-2.05-5.197C10.637.774 8.857 0 7 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group1128Icon;
/* prettier-ignore-end */
