import { useState } from 'react';
import { CodeBlock } from './CodeBlock';
import { DemoData } from '../types';
import { Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import { ProcessingSteps } from './demos/common/ProcessingSteps';
import { ImageDemo } from './demos/ImageDemo';
import { AudioDemo } from './demos/AudioDemo';
import { TranscriptionDemo } from './demos/TranscriptionDemo';
import { ModerationDemo } from './demos/ModerationDemo';
import { ChatDemo } from './demos/ChatDemo';
import { EmbeddingDemo } from './demos/EmbeddingDemo';
import { PROCESSING_STEPS } from './demos/processingSteps';

interface DemoCardProps {
    data: DemoData;
    onRun: (id: string) => void;
}

export function DemoCard({ data, onRun }: DemoCardProps) {
    const [expanded, setExpanded] = useState(false);
    const [processingStep, setProcessingStep] = useState(-1);
    const [processingCompleted, setProcessingCompleted] = useState(false);

    const steps = PROCESSING_STEPS[data.outputType] || [];

    const handleRun = async () => {
        setProcessingStep(0);
        setProcessingCompleted(false);

        for (let i = 0; i < steps.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setProcessingStep(i);
        }

        onRun(data.id);
        setProcessingCompleted(true);
    };

    const renderDemo = () => {
        const props = {
            output: data.output
        };

        switch (data.outputType) {
            case 'image':
                return <ImageDemo {...props} />;
            case 'audio':
                return <AudioDemo {...props} />;
            case 'transcription':
                return <TranscriptionDemo {...props} />;
            case 'moderation':
                return <ModerationDemo {...props} />;
            case 'chat':
                return <ChatDemo {...props} />;
            case 'embedding':
                return <EmbeddingDemo {...props} />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">{data.title}</h3>
                        <p className="mt-2 text-gray-600">{data.description}</p>
                    </div>
                </div>

                <div className="mt-4">
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                    >
                        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        <span className="ml-1">{expanded ? 'Hide Code' : 'Show Code'}</span>
                    </button>

                    {expanded && (
                        <div className="mt-4">
                            <CodeBlock code={data.code} />
                        </div>
                    )}
                </div>

                <div className="mt-6">
                    <button
                        onClick={handleRun}
                        disabled={data.loading || (processingStep !== -1 && !processingCompleted)}
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700
                     disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2
                     transition-colors duration-200"
                    >
                        {data.loading && <Loader2 size={16} className="animate-spin" />}
                        {processingStep === -1 ? 'Run Demo' : 'Processing...'}
                    </button>
                </div>

                {processingStep !== -1 && steps && steps.length > 0 && (
                    <ProcessingSteps
                        steps={steps}
                        currentStep={processingStep}
                        completed={processingCompleted}
                    />
                )}

                {data.output && renderDemo()}
            </div>
        </div>
    );
}