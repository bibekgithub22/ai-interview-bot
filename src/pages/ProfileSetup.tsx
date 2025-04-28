
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    jobRole: "",
    experienceLevel: "",
    interviewType: "mixed",
  });

  const jobRoles = [
    "Software Developer", 
    "Data Analyst",
    "Product Manager", 
    "UX Designer",
    "Marketing Executive", 
    "Sales Representative",
    "Customer Support Specialist",
    "Project Manager",
    "HR Manager",
    "Financial Analyst",
    "Business Analyst",
    "Content Writer",
    "Operations Manager",
    "Other"
  ];

  const experienceLevels = ["Entry-level", "Mid-level", "Senior"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interviewType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    
    if (!formData.jobRole) {
      toast.error("Please select a job role.");
      return;
    }
    
    if (!formData.experienceLevel) {
      toast.error("Please select your experience level.");
      return;
    }
    
    // In a real application, you would save this data to state management
    // For now, we'll just navigate to the interview page
    navigate("/interview");
  };

  return (
    <div className="max-w-2xl mx-auto py-8 animate-scale-in">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Profile Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobRole">Job Role</Label>
              <Select
                value={formData.jobRole}
                onValueChange={(value) => handleSelectChange("jobRole", value)}
              >
                <SelectTrigger id="jobRole">
                  <SelectValue placeholder="Select job role" />
                </SelectTrigger>
                <SelectContent>
                  {jobRoles.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experienceLevel">Experience Level</Label>
              <Select
                value={formData.experienceLevel}
                onValueChange={(value) => handleSelectChange("experienceLevel", value)}
              >
                <SelectTrigger id="experienceLevel">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Interview Type</Label>
              <RadioGroup
                defaultValue={formData.interviewType}
                onValueChange={handleRadioChange}
                className="grid grid-cols-1 gap-4 sm:grid-cols-3"
              >
                <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted">
                  <RadioGroupItem value="technical" id="technical" />
                  <Label htmlFor="technical" className="flex flex-1 cursor-pointer">Technical</Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted">
                  <RadioGroupItem value="behavioral" id="behavioral" />
                  <Label htmlFor="behavioral" className="flex flex-1 cursor-pointer">Behavioral</Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted">
                  <RadioGroupItem value="mixed" id="mixed" />
                  <Label htmlFor="mixed" className="flex flex-1 cursor-pointer">Mixed</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="pt-4">
              <Button 
                type="submit"
                className="w-full btn-primary"
              >
                Start Interview
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSetup;
