import Counter from "../islands/Counter.tsx";
import {HeadElement} from "../components/HeadElement.tsx";
import {Header} from "../components/Header.tsx";

export default function Home(ctx: PageProps<Data>) {
    const { data, url } = ctx;
  return (
    <div class="p-4 mx-auto max-w-screen-md bg-red-200">
        <HeadElement
            description="home"
            image={url.href + "static/logos/deno_hr_circle.svg"}
            title="Home"
            url={"/index"}
        />
        <Header
            title="Home"
        />
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-6">
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}
