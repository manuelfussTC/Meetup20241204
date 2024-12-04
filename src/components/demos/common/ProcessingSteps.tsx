import { Check, Loader2 } from 'lucide-react';

interface ProcessingStepsProps {
    steps: string[];
    currentStep: number;
    completed: boolean;
}

export const ProcessingSteps = ({ steps, currentStep, completed }: ProcessingStepsProps) => {
    if (!steps || steps.length === 0) return null;

    return (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Processing Status</h4>
            <div className="space-y-2">
                {steps.map((step, index) => (
                    <div key={step} className="flex items-center space-x-2">
                        {index === currentStep && !completed ? (
                            <Loader2 size={16} className="animate-spin text-blue-500" />
                        ) : index <= currentStep ? (
                            <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                                <Check size={12} className="text-white" />
                            </div>
                        ) : (
                            <div className="w-4 h-4 rounded-full border border-gray-300" />
                        )}
                        <span className={`text-sm ${
                            index === currentStep ? 'text-blue-500 font-medium' :
                                index < currentStep ? 'text-gray-500' : 'text-gray-400'
                        }`}>
              {step}
            </span>
                    </div>
                ))}
            </div>
        </div>
    );
};