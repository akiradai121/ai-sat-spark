
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface TestQuestionProps {
  questionNumber: number;
}

export const TestQuestion = ({ questionNumber }: TestQuestionProps) => {
  // This would typically come from an API or question bank
  const question = {
    text: "What is the value of x in the equation 2x + 5 = 13?",
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "4" },
      { id: "C", text: "5" },
      { id: "D", text: "6" },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="text-sm text-gray-500">Question {questionNumber}</span>
        <h3 className="text-xl font-medium">{question.text}</h3>
      </div>

      <RadioGroup className="space-y-3">
        {question.options.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <RadioGroupItem value={option.id} id={option.id} />
            <Label htmlFor={option.id} className="text-base">
              {option.id}. {option.text}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
