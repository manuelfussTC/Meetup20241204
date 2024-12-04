import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-gray-400" />}
      </button>
      <SyntaxHighlighter
        language="python"
        style={atomOneDark}
        className="rounded-lg !bg-gray-900 !p-4"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}