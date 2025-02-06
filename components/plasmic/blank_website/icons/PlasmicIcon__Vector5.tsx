// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5 7.125c-.474 0-.928-.198-1.263-.55a1.924 1.924 0 01-.523-1.325c0-.497.188-.974.523-1.326.335-.351.79-.549 1.263-.549.474 0 .928.198 1.263.55.335.35.523.828.523 1.325 0 .246-.046.49-.136.718-.09.227-.221.434-.387.608a1.782 1.782 0 01-.58.406A1.712 1.712 0 015 7.125zM5 0a4.882 4.882 0 00-3.536 1.538A5.386 5.386 0 000 5.25C0 9.188 5 15 5 15s5-5.813 5-9.75a5.386 5.386 0 00-1.464-3.712A4.882 4.882 0 005 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
