// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1129IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1129Icon(props: Group1129IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.083 5.819c-.386 0-.757-.162-1.03-.449a1.571 1.571 0 01-.428-1.083c0-.406.154-.795.427-1.082a1.424 1.424 0 011.031-.449c.387 0 .758.162 1.032.449.273.287.427.676.427 1.082 0 .202-.038.4-.111.586a1.554 1.554 0 01-.316.497 1.456 1.456 0 01-.474.332 1.398 1.398 0 01-.558.117zm0-5.819a3.987 3.987 0 00-2.887 1.256A4.399 4.399 0 000 4.287c0 3.216 4.083 7.963 4.083 7.963s4.084-4.747 4.084-7.963c0-1.137-.43-2.227-1.196-3.031A3.987 3.987 0 004.083 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group1129Icon;
/* prettier-ignore-end */
