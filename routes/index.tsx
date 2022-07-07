/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
// import CypressTestsCounter from "../islands/CypressTestsCounterInIslands.tsx";
import CypressTestsCounter from "../components/CypressTestsCounter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <br />
      <CypressTestsCounter testCount={58} />
    </div>
  );
}
