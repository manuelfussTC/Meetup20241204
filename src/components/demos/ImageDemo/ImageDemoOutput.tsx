interface ImageOutputProps {
    data: {
        url: string;
        revised_prompt?: string;
    };
}

export const ImageOutput = ({ data }: ImageOutputProps) => (
    <div className="mt-4 space-y-4">
        <div className="relative group">
            <img
                src={data.url}
                alt="Generated"
                className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/90 rounded-lg text-sm font-medium hover:bg-white transition-colors duration-200"
                >
                    View Full Size
                </a>
            </div>
        </div>
        {data.revised_prompt && (
            <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Revised Prompt</h4>
                <p className="text-sm text-gray-600">{data.revised_prompt}</p>
            </div>
        )}
    </div>
);