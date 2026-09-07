import { QuartzComponent } from '@quartz-community/types';

interface SidebarDecorationComponentOptions {
    lightSrc?: string;
    darkSrc?: string;
    className?: string;
}
declare const _default: (userOpts?: Partial<SidebarDecorationComponentOptions>) => QuartzComponent;

export { _default as SidebarDecorationComponent, type SidebarDecorationComponentOptions };
