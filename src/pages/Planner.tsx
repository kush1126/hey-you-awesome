import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Calculator, AlertTriangle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const Planner = () => {
  const [totalClasses, setTotalClasses] = useState<number>(0);
  const [attendedClasses, setAttendedClasses] = useState<number>(0);
  const [minimumAttendance, setMinimumAttendance] = useState<number>(75);
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();

  const calculateBunkLimit = () => {
    if (totalClasses === 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid class numbers",
        variant: "destructive",
      });
      return;
    }

    const currentAttendance = (attendedClasses / totalClasses) * 100;
    const requiredAttendance = minimumAttendance / 100;

    // Calculate maximum classes that can be bunked
    let maxBunks = 0;
    let futureTotal = totalClasses;
    
    while (true) {
      futureTotal++;
      const futureAttendance = attendedClasses / futureTotal;
      
      if (futureAttendance < requiredAttendance) {
        break;
      }
      maxBunks++;
    }

    // Calculate classes needed to attend to maintain minimum
    const classesNeededToMaintain = Math.ceil(
      (requiredAttendance * (totalClasses + maxBunks) - attendedClasses)
    );

    setResult({
      currentAttendance: currentAttendance.toFixed(2),
      maxBunks: maxBunks - 1,
      classesNeeded: Math.max(0, classesNeededToMaintain),
      isAboveMinimum: currentAttendance >= minimumAttendance,
      status: currentAttendance >= minimumAttendance ? 'safe' : 'danger'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-academic-light/20 to-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Smart Attendance Calculator
            </h1>
            <p className="text-xl text-muted-foreground">
              Calculate how many classes you can safely skip while maintaining minimum attendance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Input Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Enter Your Details
                </CardTitle>
                <CardDescription>
                  Fill in your current attendance details to get personalized recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="total">Total Classes Conducted</Label>
                  <Input
                    id="total"
                    type="number"
                    value={totalClasses || ""}
                    onChange={(e) => setTotalClasses(Number(e.target.value))}
                    placeholder="e.g., 50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="attended">Classes Attended</Label>
                  <Input
                    id="attended"
                    type="number"
                    value={attendedClasses || ""}
                    onChange={(e) => setAttendedClasses(Number(e.target.value))}
                    placeholder="e.g., 40"
                  />
                </div>
                
                <div>
                  <Label htmlFor="minimum">Minimum Attendance Required (%)</Label>
                  <Input
                    id="minimum"
                    type="number"
                    value={minimumAttendance || ""}
                    onChange={(e) => setMinimumAttendance(Number(e.target.value))}
                    placeholder="e.g., 75"
                  />
                </div>

                <Button 
                  onClick={calculateBunkLimit} 
                  className="w-full"
                  disabled={!totalClasses || !attendedClasses}
                >
                  Calculate Bunk Limit
                </Button>
              </CardContent>
            </Card>

            {/* Results Card */}
            {result && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {result.status === 'safe' ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-warning" />
                    )}
                    Your Attendance Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Current Attendance</span>
                      <span className="font-semibold">{result.currentAttendance}%</span>
                    </div>
                    <Progress 
                      value={parseFloat(result.currentAttendance)} 
                      className="h-2"
                    />
                  </div>

                  {result.status === 'safe' ? (
                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <div className="space-y-2">
                          <p><strong>Good news!</strong> You're above the minimum attendance.</p>
                          <p>🎉 You can skip up to <strong>{result.maxBunks}</strong> more classes</p>
                          <p>📚 Minimum classes to attend: <strong>{result.classesNeeded}</strong></p>
                        </div>
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <div className="space-y-2">
                          <p><strong>Warning!</strong> Your attendance is below minimum.</p>
                          <p>❌ You cannot skip any more classes</p>
                          <p>📚 You need to attend <strong>{result.classesNeeded}</strong> more classes</p>
                        </div>
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Tips Section */}
          <Card>
            <CardHeader>
              <CardTitle>💡 Smart Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">✅ Best Practices:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Maintain 80%+ attendance for safety buffer</li>
                    <li>• Attend important lectures and exams</li>
                    <li>• Plan bunks around less important topics</li>
                    <li>• Keep track of schedule changes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">⚠️ Remember:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• This tool provides estimates only</li>
                    <li>• Check your institution's specific rules</li>
                    <li>• Consider makeup classes and rescheduling</li>
                    <li>• Attendance affects learning outcomes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Planner;