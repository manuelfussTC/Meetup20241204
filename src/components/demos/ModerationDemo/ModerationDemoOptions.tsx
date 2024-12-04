// ModerationOptions.tsx
interface ModerationOptionsProps {
  options: {
    input: string;
  };
  examples: Array<{ text: string; description: string; }>;
  onChange: (options: any) => void;
}

export const ModerationOptions = ({ options, examples, onChange }: ModerationOptionsProps) => (
    <div className="mt-4 space-y-4 p-4 bg-gray-50 rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700">Text to Analyze</label>
        <textarea
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={4}
            value={options.input}
            onChange={(e) => onChange({ ...options, input: e.target.value })}
            placeholder="Enter text to analyze for content moderation..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Example Texts</label>
        <div className="grid grid-cols-2 gap-2">
          {examples.map((example, index) => (
              <button
                  key={index}
                  className="p-2 text-left text-sm border border-gray-200 rounded-lg hover:border-blue-500"
                  onClick={() => onChange({ ...options, input: example.text })}
              >
                <strong className="block text-gray-700">{example.description}</strong>
                <span className="text-gray-500 text-xs">{example.text}</span>
              </button>
          ))}
        </div>
      </div>
    </div>
);