import { useCourse } from "@/store";
import UnderlineInput from "./UnderLineInput";

export default function Question() {
  const { currentStatement: getCurrentStatement, checkCorrect } = useCourse();
  const word = getCurrentStatement()?.chinese || "加载中...";
  const lineNum = getCurrentStatement()?.english.split(" ").length || 1;

  function handleCheckAnswer(input: string) {
    if (checkCorrect(input)) {
      useCourse.setState({
        currentMode: "answer",
      });
    }
  }

  return (
    <div className="text-5xl text-center mb-20 mt-10">
      <div className="text-fuchsia-500 dark:text-gray-50">{word}</div>
      {
        <UnderlineInput
          onCheckAnswer={handleCheckAnswer}
          lineNum={lineNum}
        ></UnderlineInput>
      }
    </div>
  );
}
