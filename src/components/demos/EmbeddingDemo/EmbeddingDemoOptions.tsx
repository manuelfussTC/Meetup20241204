// EmbeddingOptions.tsx
interface EmbeddingOptionsProps {
  options: {
    input: string;
    model?: string;
  };
  examples: Array<{ text: string; description: string; }>;
  onChange: (options: any) => void;
}

export const EmbeddingOptions = ({ options, examples, onChange }: EmbeddingOptionsProps) => (
    <div className="mt-4 space-y-4 p-4 bg-gray-50 rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700">Input Text</label>
        <textarea
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={4}
            value={options.input}
            onChange={(e) => onChange({ ...options, input: e.target.value })}
            placeholder="Enter text to generate embeddings..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Model</label>
        <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={options.model || 'text-embedding-ada-002'}
            onChange={(e) => onChange({ ...options, model: e.target.value })}
        >
          <option value="text-embedding-ada-002">text-embedding-ada-002</option>
          <option value="text-embedding-3-small">text-embedding-3-small</option>
          <option value="text-embedding-3-large">text-embedding-3-large</option>
        </select>
        <p className="mt-1 text-xs text-gray-500">
          Different models offer different tradeoffs between speed, cost, and quality.
        </p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Example Texts</label>
        <div className="grid grid-cols-2 gap-2">
          {examples.map((example, index) => (
              <button
                  key={index}
                  className="p-2 text-left text-sm border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
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