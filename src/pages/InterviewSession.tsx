
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

// Mock questions - in a real application, these would come from an API
const mockQuestions = [
  "Tell me about a time you had to work under a tight deadline. How did you handle it?",
  "What are your greatest strengths and weaknesses?",
  "How do you prioritize your work when dealing with multiple tasks?",
  "Describe a situation where you had to resolve a conflict within your team.",
  "What do you know about our company, and why do you want to work here?",
];

const InterviewSession = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  
  const totalQuestions = mockQuestions.length;
  const progress = ((currentQuestionIndex) / totalQuestions) * 100;
  
  const handleNextQuestion = () => {
    if (!answer.trim()) {
      toast.error("Please provide an answer before continuing.");
      return;
    }
    
    // Save the current answer
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < totalQuestions - 1) {
      // Go to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswer("");
    } else {
      // Interview complete, go to results
      navigate("/results");
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto py-8 animate-scale-in">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-gray-700">
            {Math.floor(progress)}%
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            {mockQuestions[currentQuestionIndex]}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Type your answer here..."
            className="min-h-[200px]"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button 
            onClick={handleNextQuestion}
            className="btn-primary"
          >
            {currentQuestionIndex < totalQuestions - 1 ? "Next Question" : "Complete Interview"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
      
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Speak clearly and concisely. Take a moment to structure your thoughts before answering.</p>
        <p className="mt-2">
          {currentQuestionIndex < totalQuestions - 1 
            ? `${totalQuestions - currentQuestionIndex - 1} questions remaining.` 
            : "This is the last question."}
        </p>
      </div>
    </div>
  );
};

export default InterviewSession;
