// ChatOptions.tsx
interface ChatOptionsProps {
  options: {
    messages: Array<{ role: string; content: string; }>;
    temperature?: number;
    max_tokens?: number;
  };
  examples: Array<{ text: string; description: string; }>;
  onChange: (options: any) => void;
}

export const ChatOptions = ({ options, examples, onChange }: ChatOptionsProps) => (
    <div className="mt-4 space-y-4 p-4 bg-gray-50 rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            value={options.messages?.[options.messages.length - 1]?.content || ''}
            onChange={(e) => {
              const messages = [...(options.messages || [])];
              if (messages.length === 0) {
                messages.push({ role: 'user', content: e.target.value });
              } else {
                messages[messages.length - 1].content = e.target.value;
              }
              onChange({ ...options, messages });
            }}
            placeholder="Enter your message..."
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Temperature</label>
          <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={options.temperature || 1}
              onChange={(e) => onChange({ ...options, temperature: parseFloat(e.target.value) })}
              className="mt-2 w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Focused</span>
            <span>{options.temperature || 1}</span>
            <span>Creative</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Max Tokens</label>
          <input
              type="number"
              min="1"
              max="4000"
              value={options.max_tokens || 150}
              onChange={(e) => onChange({ ...options, max_tokens: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Example Messages</label>
        <div className="grid grid-cols-2 gap-2">
          {examples.map((example, index) => (
              <button
                  key={index}
                  className="p-2 text-left text-sm border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
                  onClick={() => {
                    onChange({
                      ...options,
                      messages: [{ role: 'user', content: example.text }]
                    });
                  }}
              >
                <strong className="block text-gray-700">{example.description}</strong>
                <span className="text-gray-500 text-xs line-clamp-2">{example.text}</span>
              </button>
          ))}
        </div>
      </div>
    </div>
);