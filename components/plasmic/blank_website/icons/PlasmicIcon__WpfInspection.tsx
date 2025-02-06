// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WpfInspectionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WpfInspectionIcon(props: WpfInspectionIconProps) {
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

      <g clipPath={"url(#DhcK5Wc3qbB7a)"}>
        <path
          d={
            "M31.794 0c-1.712 0-2.95.719-3.44 1.453-.244.244-.442.748-.686.993h-3.211a4.906 4.906 0 00-4.892 4.891h-4.891c-4.158 0-7.337 3.18-7.337 7.337V56.25c0 4.158 3.18 7.337 7.337 7.337h34.24c4.157 0 7.336-3.18 7.336-7.337V14.674c0-4.158-3.18-7.337-7.337-7.337h-4.891a4.906 4.906 0 00-4.892-4.891h-3.21c-.245-.245-.44-.749-.685-.993C34.743.719 33.505 0 31.794 0zm-7.337 7.337H39.13v4.891H24.457V7.337zm-9.783 7.337h5.657c.733 1.467 2.414 2.446 4.126 2.446H39.13c1.712 0 3.393-.979 4.129-2.446h5.654V56.25h-34.24V14.674zm25.833 11.465c-.46 0-.904.166-1.15.533L28.586 38.138l-4.128-3.899c-.734-.733-1.957-.733-2.446 0l-1.683 1.683c-.733.734-.733 1.956 0 2.446l6.804 6.417c.978.978 2.46.672 3.439-.306l13.22-14.136c.49-.489.507-1.484-.226-2.218l-1.761-1.453a1.832 1.832 0 00-1.297-.533z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"DhcK5Wc3qbB7a"}>
          <path fill={"currentColor"} d={"M0 0h63.587v63.587H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default WpfInspectionIcon;
/* prettier-ignore-end */
