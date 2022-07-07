/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface CypressTestsCounterProps {
  testCount: number;
}

export default function CypressTestsCounter(props: CypressTestsCounterProps) {
  const [testCount, setTestCount] = useState(props.testCount);
  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  const counterMessage = testCount < 100 ? tw`flex-grow-1 font-bold text-xl` : tw`flex-grow-1 font-bold text-xl animate-spin`;
  const counterValue = testCount < 100 ? testCount : `🎉 ${testCount} 🎉`;
  return (
    <div class={tw`flex gap-2 w-full`}>
      <p class={counterMessage}>Lets get to 100! Currently: {counterValue}</p>
      <button
        class={btn}
        onClick={() => setTestCount(testCount - 2)}
        disabled={!IS_BROWSER}
      >
        -2
      </button>
      <button
        class={btn}
        onClick={() => setTestCount(testCount + 2)}
        disabled={!IS_BROWSER}
      >
        +2
      </button>
    </div>
  );
}