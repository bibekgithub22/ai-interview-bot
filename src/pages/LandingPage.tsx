
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center pt-12 pb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">AI HR Interview</span>
          <span className="block text-primary">Practice Bot</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Practice and Perfect Your Interview Skills with AI!
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => navigate("/profile")}
            className="btn-primary text-lg px-8 py-4 rounded-md" 
          >
            Start Practice
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Realistic AI Interviews</h3>
            <p className="mt-2 text-base text-gray-500">
              Experience interviews with our advanced AI that simulates real HR professionals
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Personalized Feedback</h3>
            <p className="mt-2 text-base text-gray-500">
              Get detailed insights on your performance and actionable improvement suggestions
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Multiple Interview Types</h3>
            <p className="mt-2 text-base text-gray-500">
              Choose from technical, behavioral, or mixed interview formats tailored to your field
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 my-12">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg font-medium">Create Profile</h3>
            <p className="mt-2 text-gray-500">Enter your details and job preferences</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg font-medium">Select Interview Type</h3>
            <p className="mt-2 text-gray-500">Choose the interview format that suits your needs</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg font-medium">Answer Questions</h3>
            <p className="mt-2 text-gray-500">Respond to AI-generated interview questions</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mx-auto mb-4">
              4
            </div>
            <h3 className="text-lg font-medium">Get Feedback</h3>
            <p className="mt-2 text-gray-500">Receive detailed analysis and improvement tips</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button
            onClick={() => navigate("/profile")}
            className="btn-primary"
          >
            Start Your Interview Practice
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
