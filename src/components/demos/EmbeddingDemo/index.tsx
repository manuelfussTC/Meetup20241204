import { DemoComponentProps } from '../../../types';

export const EmbeddingDemo = ({ output }: DemoComponentProps) => {
  if (!output) return null;

  // Nehmen Sie die ersten 20 Dimensionen für die Visualisierung
  const displayDimensions = output.embeddings.slice(0, 20);
  const maxValue = Math.max(...displayDimensions.map(Math.abs));

  return (
      <div className="mt-4 space-y-4">
        {/* Model Info */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-700 font-medium mb-2">
            Model: {output.model}
          </div>
          <div className="text-sm text-gray-600">
            Generated {output.dimensions}-dimensional embedding vector
          </div>
        </div>

        {/* Vector Visualization */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm font-medium text-gray-700 mb-3">
            First 20 Dimensions Visualization
          </div>
          <div className="space-y-2">
            {displayDimensions.map((value, index) => {
              const normalizedValue = value / maxValue;
              const width = Math.abs(normalizedValue) * 100;
              const isPositive = value >= 0;

              return (
                  <div key={index} className="flex items-center text-xs">
                    <span className="w-12 text-gray-500">Dim {index}:</span>
                    <div className="flex-grow flex items-center">
                      {!isPositive && (
                          <div
                              className="h-2 bg-red-200"
                              style={{ width: `${width}%`, marginLeft: `${100 - width}%` }}
                          />
                      )}
                      {isPositive && (
                          <div
                              className="h-2 bg-blue-200"
                              style={{ width: `${width}%` }}
                          />
                      )}
                    </div>
                    <span className="w-20 text-right text-gray-500 ml-2">
                  {value.toFixed(4)}
                </span>
                  </div>
              );
            })}
          </div>
        </div>

        {/* Raw Values */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm font-medium text-gray-700 mb-2">Raw Vector</div>
          <div className="text-xs text-gray-500 font-mono overflow-x-auto whitespace-pre">
            [
            {output.embeddings.map((v: number, i: number) => (
                `\n  ${v.toFixed(6)}${i < output.embeddings.length - 1 ? ',' : ''}`
            )).join('')}
            ]
          </div>
        </div>
      </div>
  );
};