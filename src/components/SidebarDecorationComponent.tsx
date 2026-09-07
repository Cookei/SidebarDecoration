import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types";
import { classNames } from "../util/lang";
import style from "./styles/SidebarDecoration.scss";
// @ts-expect-error - inline script import handled by Quartz bundler
import script from "./scripts/SidebarDecoration.inline";

export interface SidebarDecorationComponentOptions {
  lightSrc?: string;
  darkSrc?: string;
  className?: string;
}

const defaultOptions: SidebarDecorationComponentOptions = {
  className: "sidebar-decoration",
};

export default ((userOpts?: Partial<SidebarDecorationComponentOptions>) => {
  const opts: SidebarDecorationComponentOptions = { ...defaultOptions, ...userOpts };

  const SidebarDecorationComponent: QuartzComponent = (props: QuartzComponentProps) => {
    const { cfg } = props;
    const displayClass = (props as { displayClass?: "mobile-only" | "desktop-only" }).displayClass;

    const lightSrc = opts.lightSrc ?? "/static/sidebar-decoration-image-light.png";
    const darkSrc = opts.darkSrc ?? "/static/sidebar-decoration-image-dark.png";

    return (
      <div class={classNames(displayClass, opts.className)}>
        <img src={lightSrc} data-light-src={lightSrc} data-dark-src={darkSrc} />
      </div>
    );
  };

  SidebarDecorationComponent.css = style;
  SidebarDecorationComponent.afterDOMLoaded = script;

  return SidebarDecorationComponent;
}) satisfies QuartzComponentConstructor;
