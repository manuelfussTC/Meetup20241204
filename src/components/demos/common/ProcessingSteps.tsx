import { Check, Loader2, HelpCircle } from 'lucide-react';

interface ProcessingStep {
    label: string;
    tooltip: string;
}

interface ProcessingStepsProps {
    steps: ProcessingStep[];
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
                    <div key={step.label} className="group relative flex items-center space-x-2">
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
              {step.label}
            </span>

                        {/* Tooltip container with relative positioning */}
                        <div className="relative inline-block">
                            {/* Tooltip trigger */}
                            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <HelpCircle size={14} className="text-gray-400 hover:text-gray-600" />
                            </button>

                            {/* Tooltip content - now positioned above */}
                            <div className="absolute bottom-full right-0 mb-2 ml-2 left-1 hidden group-hover:block w-64 p-2 bg-gray-900 text-white text-xs rounded shadow-lg z-10">
                                {step.tooltip}
                                {/* Tooltip arrow */}
                                <div className="absolute bottom-[-6px] left-2 w-3 h-3 bg-gray-900 transform rotate-45"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};