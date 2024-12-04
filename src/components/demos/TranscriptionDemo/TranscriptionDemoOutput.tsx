export const TranscriptionOutput = ({ data }: { data: { text: string, words?: Array<any> } }) => (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Transcription Result</h4>
        <p className="text-sm text-gray-600">{data.text}</p>
        {data.words && (
            <div className="mt-4">
                <h5 className="text-xs font-medium text-gray-700 mb-2">Word Timestamps</h5>
                <div className="max-h-40 overflow-y-auto">
                    {data.words.map((word, index) => (
                        <div key={index} className="flex justify-between text-xs text-gray-500">
                            <span>{word.word}</span>
                            <span>{word.start.toFixed(2)}s - {word.end.toFixed(2)}s</span>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
);