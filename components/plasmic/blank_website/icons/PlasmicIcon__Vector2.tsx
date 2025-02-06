// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.632 1.562h.911l-.847.615.324.997-.848-.616-.848.616.28-.86c-.746.62-1.4 1.35-1.94 2.16h.293l-.54.393c-.084.14-.165.282-.242.427l.258.793-.481-.35a9.81 9.81 0 00-.327.777l.284.874h1.048l-.848.616.324.996-.848-.616-.508.37C.027 9.161 0 9.577 0 10h10V0a9.953 9.953 0 00-5.368 1.562zM5.02 9l-.848-.616L3.324 9l.324-.996-.847-.616h1.047l.324-.997.324.997h1.047l-.847.616L5.02 9zm-.324-3.91l.324.997-.848-.616-.848.616.324-.996-.847-.616h1.047l.324-.997.324.997h1.047l-.847.616zM8.606 9l-.847-.616L6.91 9l.324-.996-.848-.616h1.048l.324-.997.324.997H9.13l-.847.616.324.996zm-.323-3.91l.324.997-.848-.616-.848.616.324-.996-.848-.616h1.048l.324-.997.324.997H9.13l-.847.616zm0-2.913l.324.997-.848-.616-.848.616.324-.997-.848-.615h1.048L7.76.565l.324.997H9.13l-.847.615z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
