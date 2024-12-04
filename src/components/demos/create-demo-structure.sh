#!/bin/bash

# Erstelle Hauptordner
mkdir -p common ImageDemo AudioDemo TranscriptionDemo ModerationDemo ChatDemo EmbeddingDemo

# Erstelle gemeinsame Komponenten
cat > common/ProcessingSteps.tsx << 'EOL'
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
EOL

cat > common/ExamplePrompts.tsx << 'EOL'
interface Example {
  description: string;
  prompt?: string;
  text?: string;
  voice?: string;
  imagePath?: string;
}

interface ExamplePromptsProps {
  type: 'image' | 'audio' | 'chat' | 'transcription';
  examples: Example[];
  onSelect: (example: Example) => void;
}

export const ExamplePrompts = ({ type, examples, onSelect }: ExamplePromptsProps) => (
  <div className="mt-4 space-y-3">
    <h4 className="text-sm font-medium text-gray-700">Example Prompts</h4>
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {examples.map((example, index) => (
        <div
          key={index}
          onClick={() => onSelect(example)}
          className="cursor-pointer group p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 transition-all"
        >
          {type === 'image' && example.imagePath && (
            <div className="mb-2 rounded-md overflow-hidden">
              <img
                src={example.imagePath}
                alt={example.description}
                className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          )}
          <div>
            <h5 className="text-sm font-medium text-gray-900 mb-1">{example.description}</h5>
            <p className="text-sm text-gray-600">
              {type === 'image' ? example.prompt : example.text}
            </p>
            {type === 'audio' && example.voice && (
              <p className="text-xs text-gray-500 mt-1">Voice: {example.voice}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
EOL

# Funktion zum Erstellen der Demo-Komponenten
create_demo_files() {
  local demo_name=$1
  local demo_type=$2

  # Erstelle index.tsx
  cat > "$demo_name/index.tsx" << EOL
import { ${demo_name}Options } from './${demo_name}Options';
import { ${demo_name}Output } from './${demo_name}Output';
import { ExamplePrompts } from '../common/ExamplePrompts';
import { DemoComponentProps } from '../../../types';

export const PROCESSING_STEPS = [
  'Processing input',
  'Analyzing content',
  'Generating output',
  'Finalizing results'
];

export const ${demo_name} = ({
  options,
  output,
  onUpdateOptions
}: DemoComponentProps) => {
  return (
    <>
      <${demo_name}Options
        options={options}
        onChange={onUpdateOptions}
      />
      {output && (
        <${demo_name}Output data={output} />
      )}
    </>
  );
};
EOL

  # Erstelle Options.tsx
  cat > "$demo_name/${demo_name}Options.tsx" << EOL
interface ${demo_name}OptionsProps {
  options: any;
  onChange: (options: any) => void;
}

export const ${demo_name}Options = ({ options, onChange }: ${demo_name}OptionsProps) => {
  return (
    <div className="mt-4 space-y-4 p-4 bg-gray-50 rounded-lg">
      {/* Add your options UI here */}
    </div>
  );
};
EOL

  # Erstelle Output.tsx
  cat > "$demo_name/${demo_name}Output.tsx" << EOL
interface ${demo_name}OutputProps {
  data: any;
}

export const ${demo_name}Output = ({ data }: ${demo_name}OutputProps) => {
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      {/* Add your output UI here */}
      <pre className="text-sm text-gray-600">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};
EOL
}

# Erstelle alle Demo-Komponenten
create_demo_files "ImageDemo" "image"
create_demo_files "AudioDemo" "audio"
create_demo_files "TranscriptionDemo" "transcription"
create_demo_files "ModerationDemo" "moderation"
create_demo_files "ChatDemo" "chat"
create_demo_files "EmbeddingDemo" "embedding"

echo "Demo-Struktur wurde erfolgreich erstellt!"