// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame1281IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame1281Icon(props: Frame1281IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.8.963H9.6v-.24A.723.723 0 008.88 0a.719.719 0 00-.72.722v.241H3.84v-.24A.723.723 0 003.12 0a.719.719 0 00-.72.722v.241H1.2A1.198 1.198 0 000 2.167v9.63A1.205 1.205 0 001.2 13h9.6a1.205 1.205 0 001.2-1.204v-9.63A1.205 1.205 0 0010.8.964zM2.4 2.407a.723.723 0 00.72.723.719.719 0 00.72-.723h4.32a.723.723 0 00.72.723.719.719 0 00.72-.723h.96v1.445H1.44V2.407h.96zm-.96 9.149v-6.26h9.12v6.26H1.44zm3.6-4.815v3.37a.723.723 0 01-.72.722.719.719 0 01-.72-.722V7.904a.718.718 0 01-.887-.404.724.724 0 01.325-.92l.96-.482a.718.718 0 011.042.643zM8.73 8.78l-.576.609H8.4a.719.719 0 01.72.722.723.723 0 01-.72.722H6.48a.718.718 0 01-.661-.437.724.724 0 01.138-.781l1.69-1.79a.241.241 0 00-.145-.354.24.24 0 00-.27.112.72.72 0 01-1.247-.722 1.682 1.682 0 011.89-.785A1.68 1.68 0 019.12 7.704c.001.366-.118.723-.338 1.014a.662.662 0 01-.053.062z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame1281Icon;
/* prettier-ignore-end */
