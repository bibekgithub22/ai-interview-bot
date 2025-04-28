
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Download, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const navigate = useNavigate();
  
  // In a real application, these would come from analyzing the user's answers
  const score = 78;
  
  const strengths = [
    "Strong communication skills",
    "Clear examples provided",
    "Excellent problem-solving approach",
    "Good self-awareness"
  ];
  
  const weaknesses = [
    "Could provide more specific details",
    "Some answers were too general",
    "Consider focusing more on measurable results"
  ];
  
  const suggestions = [
    "Practice the STAR method (Situation, Task, Action, Result) for behavioral questions",
    "Research the company more thoroughly before interviews",
    "Prepare 2-3 specific examples for common interview questions",
    "Work on quantifying your achievements with metrics and numbers",
    "Consider pausing briefly before answering to organize your thoughts"
  ];
  
  const handleDownload = () => {
    // In a real application, this would generate and download a PDF report
    alert("Report download functionality would be implemented here!");
  };
  
  return (
    <div className="max-w-4xl mx-auto py-8 animate-scale-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Your Interview Results</h1>
        <p className="text-gray-500 mt-2">
          Here's how you performed in your practice interview
        </p>
      </div>
      
      <div className="mb-8 flex justify-center">
        <div className="bg-white rounded-full p-8 shadow-lg">
          <div className="text-5xl font-bold text-center text-primary">
            {score}%
          </div>
          <div className="text-gray-500 text-center mt-2">Overall Score</div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center text-green-600">
              <Check className="mr-2 h-5 w-5" />
              Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center text-red-600">
              <X className="mr-2 h-5 w-5" />
              Areas for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-center">
                  <X className="mr-2 h-4 w-4 text-red-600" />
                  <span>{weakness}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Card className="shadow-md mb-8">
        <CardHeader>
          <CardTitle>Detailed Suggestions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="flex">
                <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white mr-3">
                  {index + 1}
                </div>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button
          onClick={handleDownload}
          className="btn-secondary flex items-center"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Report
        </Button>
        <Button
          onClick={() => navigate("/profile")}
          className="btn-primary flex items-center"
        >
          Practice Again
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ResultsPage;
