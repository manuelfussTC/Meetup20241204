// ImageDemo/index.tsx
export const ImageDemo = ({ output }: DemoComponentProps) => {
  if (!output) return null;

  return (
      <div className="mt-4">
        <img
            src={output.url}
            alt="Generated"
            className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        />
        {output.revised_prompt && (
            <div className="mt-2 text-sm text-gray-600">
              {output.revised_prompt}
            </div>
        )}
      </div>
  );
};