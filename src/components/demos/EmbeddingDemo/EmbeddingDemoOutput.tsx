export const EmbeddingOutput = ({ data }: { data: { embeddings: number[], dimensions: number } }) => (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Embedding Visualization</h4>
        <div className="aspect-w-16 aspect-h-9">
            <div className="w-full h-full bg-white rounded-lg p-4">
                {/* Here you could add a visualization of the embedding vectors */}
                <div className="text-sm text-gray-600">
                    Generated {data.dimensions}-dimensional embedding vector
                </div>
                <div className="mt-2 text-xs text-gray-500 max-h-40 overflow-y-auto">
                    [{data.embeddings.slice(0, 10).map(v => v.toFixed(4)).join(', ')}, ...]
                </div>
            </div>
        </div>
    </div>
);