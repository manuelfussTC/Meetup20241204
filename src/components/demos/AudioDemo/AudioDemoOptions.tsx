// AudioOptions.tsx
interface AudioOptionsProps {
  options: {
    input: string;
    voice: string;
    speed: number;
    model?: string;
  };
  onChange: (options: any) => void;
}

export const AudioOptions = ({ options, onChange }: AudioOptionsProps) => (
    <div className="mt-4 space-y-4 p-4 bg-gray-50 rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700">Text to Speak</label>
        <textarea
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            value={options.input}
            onChange={(e) => onChange({ ...options, input: e.target.value })}
            placeholder="Enter the text you want to convert to speech..."
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Voice</label>
          <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={options.voice}
              onChange={(e) => onChange({ ...options, voice: e.target.value })}
          >
            <option value="alloy">Alloy - Neutral and balanced</option>
            <option value="echo">Echo - Smooth and natural</option>
            <option value="fable">Fable - British accent</option>
            <option value="onyx">Onyx - Deep and authoritative</option>
            <option value="nova">Nova - Friendly and upbeat</option>
            <option value="shimmer">Shimmer - Clear and expressive</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Speed</label>
          <div className="mt-1">
            <input
                type="range"
                min="0.25"
                max="4.0"
                step="0.25"
                value={options.speed}
                onChange={(e) => onChange({ ...options, speed: parseFloat(e.target.value) })}
                className="w-full"
            />
            <div className="text-sm text-gray-500 mt-1 text-center">{options.speed}x</div>
          </div>
        </div>
      </div>
    </div>
);
