import Counter from "../islands/Counter.tsx";
import {HeadElement} from "../components/HeadElement.tsx";
import {Header} from "../components/Header.tsx";
import {MysteryBox} from "../components/MysteryBox.tsx";
import RandomNumberGenerator from "../islands/RandomNumberGenerator.tsx";

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
        <br/>
      {/*<img*/}
      {/*  src="/logo.svg"*/}
      {/*  class="w-32 h-32"*/}
      {/*  alt="the fresh logo: a sliced lemon dripping with juice"*/}
      {/*/>*/}
      {/*<p class="my-6">*/}
      {/*  Welcome to `fresh`. Try updating this message in the ./routes/index.tsx*/}
      {/*  file, and refresh.*/}
      {/*</p>*/}
        <div>
        <h1>
            Press the Mystery Box
            <br/>
            See what happens!
        </h1>

        <br/>
        <RandomNumberGenerator upper={50} lower={1}></RandomNumberGenerator>
        <br/>
        </div>
      <Counter start={3} />
        <a href="https://github.com/caadams96/" target="_blank">
            <img
                className="fixed z-10 md:(bottom-5 right-5) bottom-2 right-2 animate-bounce"
                width="45"
                height="45"
                src="/github.png"
                alt="Explore diKnow on GitHub"
            />
        </a>
    </div>
  );
}
