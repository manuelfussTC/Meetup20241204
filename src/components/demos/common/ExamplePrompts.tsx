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