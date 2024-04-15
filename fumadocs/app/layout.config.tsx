import { utils } from "@/utils/source";
import type { DocsLayoutProps } from "fumadocs-ui/layout";

import { NavChildren, SidebarBanner } from "@/app/layout.client";

export const layoutOptions: Omit<DocsLayoutProps, "children"> = {
  tree: utils.pageTree,
  nav: {
    transparentMode: "top",
    title: (
      <div className="flex items-center gap-2">
        <svg
          width="258"
          height="198"
          viewBox="0 0 258 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
        >
          <path
            d="M165.269 24.0976L188.481 -0.000411987H0V24.0976H165.269Z"
            fill="currentColor"
          />
          <path
            d="M163.515 95.3516L253.556 2.71059H220.74L145.151 79.7886L163.515 95.3516Z"
            fill="currentColor"
          />
          <path
            d="M233.192 130.446C233.192 154.103 214.014 173.282 190.357 173.282C171.249 173.282 155.047 160.766 149.534 143.467L146.159 132.876L126.863 152.171L128.626 156.364C138.749 180.449 162.568 197.382 190.357 197.382C227.325 197.382 257.293 167.414 257.293 130.446C257.293 105.965 243.933 84.7676 224.49 73.1186L219.929 70.3856L202.261 88.2806L210.322 92.5356C223.937 99.7236 233.192 114.009 233.192 130.446Z"
            fill="currentColor"
          />
          <path
            d="M87.797 191.697V44.6736H63.699V191.697H87.797Z"
            fill="currentColor"
          />
        </svg>{" "}
        <span className="font-medium text-2xl leading-none">Env</span>
      </div>
    ),
    children: <NavChildren />,
    githubUrl: "https://github.com/t3-oss/t3-env",
  },
  sidebar: {
    defaultOpenLevel: 0,
    banner: <SidebarBanner />,
    collapsible: false,
  },
};
