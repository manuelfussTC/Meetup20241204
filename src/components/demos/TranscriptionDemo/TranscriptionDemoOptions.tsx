// TranscriptionOptions.tsx
interface TranscriptionOptionsProps {
  options: {
    language?: string;
    timestamp_granularity?: string[];
    prompt?: string;
  };
  onChange: (options: any) => void;
}

export const TranscriptionOptions = ({ options, onChange }: TranscriptionOptionsProps) => (
    <div className="mt-4 space-y-4 p-4 bg-gray-50 rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700">Audio File</label>
        <input
            type="file"
            accept="audio/*"
            className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                onChange({ ...options, file });
              }
            }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Language (Optional)</label>
          <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="en, es, fr, etc."
              value={options.language || ''}
              onChange={(e) => onChange({ ...options, language: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Timestamp Granularity</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  checked={options.timestamp_granularity?.includes('word')}
                  onChange={(e) => {
                    const granularity = options.timestamp_granularity || [];
                    if (e.target.checked) {
                      onChange({ ...options, timestamp_granularity: [...granularity, 'word'] });
                    } else {
                      onChange({
                        ...options,
                        timestamp_granularity: granularity.filter(g => g !== 'word')
                      });
                    }
                  }}
              />
              <span className="ml-2 text-sm text-gray-600">Word-level</span>
            </label>
            <label className="inline-flex items-center">
              <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  checked={options.timestamp_granularity?.includes('segment')}
                  onChange={(e) => {
                    const granularity = options.timestamp_granularity || [];
                    if (e.target.checked) {
                      onChange({ ...options, timestamp_granularity: [...granularity, 'segment'] });
                    } else {
                      onChange({
                        ...options,
                        timestamp_granularity: granularity.filter(g => g !== 'segment')
                      });
                    }
                  }}
              />
              <span className="ml-2 text-sm text-gray-600">Segment-level</span>
            </label>
          </div>
        </div>
      </div>
    </div>
);