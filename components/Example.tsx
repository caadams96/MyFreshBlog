import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Example(props: JSX.HTMLAttributes<HTMLElement>) {
    return (
        <main className="bg-green-900">
            <h1>About</h1>
            <p>This is the about page.</p>
        </main>
    );
}
