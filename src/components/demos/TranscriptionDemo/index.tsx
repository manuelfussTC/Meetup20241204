import { DemoComponentProps } from '../../../types';

export const TranscriptionDemo = ({ output }: DemoComponentProps) => {
  if (!output) return null;

  return (
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <div className="prose prose-sm max-w-none">
          <p className="text-sm text-gray-600">{output.text}</p>
          {output.words && (
              <div className="mt-2 text-xs text-gray-500">
                <div className="font-medium mb-1">Word Timestamps:</div>
                <div className="space-y-1">
                  {output.words.map((word, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span>{word.word}</span>
                        <span>{word.start.toFixed(2)}s - {word.end.toFixed(2)}s</span>
                      </div>
                  ))}
                </div>
              </div>
          )}
        </div>
      </div>
  );
};