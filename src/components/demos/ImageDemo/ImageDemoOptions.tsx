// ImageOptions.tsx
interface ImageOptionsProps {
  options: {
    prompt: string;
    size: string;
    style: string;
    quality: string;
  };
  onChange: (options: any) => void;
}

export const ImageOptions = ({ options, onChange }: ImageOptionsProps) => (
    <div className="mt-4 space-y-4 p-4 bg-gray-50 rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700">Prompt</label>
        <textarea
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            value={options.prompt}
            onChange={(e) => onChange({ ...options, prompt: e.target.value })}
            placeholder="Describe the image you want to generate..."
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Size</label>
          <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={options.size}
              onChange={(e) => onChange({ ...options, size: e.target.value })}
          >
            <option value="1024x1024">Square (1024×1024)</option>
            <option value="1792x1024">Landscape (1792×1024)</option>
            <option value="1024x1792">Portrait (1024×1792)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Style</label>
          <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={options.style}
              onChange={(e) => onChange({ ...options, style: e.target.value })}
          >
            <option value="vivid">Vivid</option>
            <option value="natural">Natural</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Quality</label>
          <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={options.quality}
              onChange={(e) => onChange({ ...options, quality: e.target.value })}
          >
            <option value="hd">HD</option>
            <option value="standard">Standard</option>
          </select>
        </div>
      </div>
    </div>
);

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
