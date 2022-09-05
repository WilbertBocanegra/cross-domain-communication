import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** @type {string[]} */ whiteList: string[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type IFrameProps = typeof __propDef.props;
export declare type IFrameEvents = typeof __propDef.events;
export declare type IFrameSlots = typeof __propDef.slots;
export default class IFrame extends SvelteComponentTyped<IFrameProps, IFrameEvents, IFrameSlots> {
}
export {};
