import { DemoComponentProps } from '../../../types';

export const ChatDemo = ({ output }: DemoComponentProps) => {
  if (!output) return null;

  return (
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <div className="prose prose-sm max-w-none">
          <p className="text-sm text-gray-600">{output.choices[0].message.content}</p>
        </div>
      </div>
  );
};