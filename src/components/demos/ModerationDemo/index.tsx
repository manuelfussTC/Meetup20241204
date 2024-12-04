import { DemoComponentProps } from '../../../types';

export const ModerationDemo = ({ output }: DemoComponentProps) => {
  if (!output) return null;

  return (
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <div className="space-y-2">
          {output.results[0].categories && Object.entries(output.results[0].categories).map(([category, flagged]) => (
              <div key={category} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{category}</span>
                <span className={`text-sm ${flagged ? 'text-red-600' : 'text-green-600'}`}>
              {String(flagged)}
            </span>
              </div>
          ))}
        </div>
      </div>
  );
};