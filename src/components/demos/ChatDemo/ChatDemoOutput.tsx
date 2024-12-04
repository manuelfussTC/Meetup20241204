export const ChatOutput = ({ data }: { data: { choices: Array<any> } }) => (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Response</h4>
        <div className="prose prose-sm max-w-none">
            <p className="text-gray-600">{data.choices[0].message.content}</p>
        </div>
    </div>
);