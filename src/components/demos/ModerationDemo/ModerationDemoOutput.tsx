export const ModerationOutput = ({ data }: { data: { results: Array<any> } }) => (
    <div className="mt-4 space-y-4">
        {data.results.map((result, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="space-y-3">
                    <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Flagged Categories</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {Object.entries(result.categories).map(([category, flagged]) => (
                                <div key={category} className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">{category}</span>
                                    <span className={`text-sm ${flagged ? 'text-red-600' : 'text-green-600'}`}>
                    {String(flagged)}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Category Scores</h4>
                        <div className="space-y-2">
                            {Object.entries(result.category_scores).map(([category, score]) => (
                                <div key={category} className="relative">
                                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                                        <span>{category}</span>
                                        <span>{(Number(score) * 100).toFixed(1)}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-200 rounded-full">
                                        <div
                                            className="h-2 bg-blue-500 rounded-full"
                                            style={{ width: `${Number(score) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);
