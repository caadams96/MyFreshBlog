import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import {MysteryBox} from "$fresh/runtime.ts";

export function MysteryBox(props: JSX.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            disabled={!IS_BROWSER || props.disabled}
            class="MysteryBox h-24 w-23 "

        ><img src="MarioBlock.svg" alt="MysteryBox"/>
        </button>
    );
}