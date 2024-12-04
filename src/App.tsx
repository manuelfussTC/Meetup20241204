import React, { useState } from 'react';
import { Brain, Image, MessageSquare, Mic, Shield, Volume2 } from 'lucide-react';
import { TabNavigation } from './components/TabNavigation';
import { DemoCard } from './components/DemoCard';
import { TabProps } from './types';

interface DemoData {
  id: string;
  title: string;
  description: string;
  code: string;
  output: any;
  loading: boolean;
  outputType: 'image' | 'audio' | 'transcription' | 'moderation' | 'chat' | 'embedding';
}

const initialDemos: DemoData[] = [
  {
    id: 'dalle',
    title: 'DALL-E 3 Image Generation',
    description: 'Generate high-quality images with the latest DALL-E 3 model. Create vivid or natural style images with detailed prompts.',
    code: `const response = await fetch('https://api.openai.com/v1/images/generations', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer $OPENAI_API_KEY'
  },
  body: JSON.stringify({
    model: "dall-e-3",
    prompt: "A mystical library at night with floating books and glowing crystals",
    n: 1,
    size: "1024x1024",
    quality: "hd",
    style: "vivid"
  })
});`,
    output: null,
    loading: false,
    outputType: 'image'
  },
  {
    id: 'tts',
    title: 'Text-to-Speech (HD)',
    description: 'Convert text to ultra-realistic speech using the new TTS-1-HD model. Choose from multiple voices and adjust speaking speed.',
    code: `const response = await fetch('https://api.openai.com/v1/audio/speech', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer $OPENAI_API_KEY'
  },
  body: JSON.stringify({
    model: "tts-1-hd",
    input: "Welcome to the future of AI! This is a demonstration of ultra-realistic text-to-speech.",
    voice: "nova",
    speed: 1.0
  })
});`,
    output: null,
    loading: false,
    outputType: 'audio'
  },
  {
    id: 'whisper',
    title: 'Whisper Transcription',
    description: 'Transcribe audio with high accuracy using the Whisper model. Supports multiple languages and provides timestamps.',
    code: `const formData = new FormData();
formData.append('file', audioFile);
formData.append('model', 'whisper-1');
formData.append('language', 'en');
formData.append('response_format', 'verbose_json');
formData.append('timestamp_granularities', ['word', 'segment']);

const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer $OPENAI_API_KEY'
  },
  body: formData
});`,
    output: null,
    loading: false,
    outputType: 'transcription'
  },
  {
    id: 'moderation',
    title: 'Content Moderation',
    description: 'Check content against OpenAI\'s latest moderation guidelines. Get detailed scores for different content categories.',
    code: `const response = await fetch('https://api.openai.com/v1/moderations', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer $OPENAI_API_KEY'
  },
  body: JSON.stringify({
    model: "omni-moderation-latest",
    input: "Text to analyze for content policy compliance"
  })
});`,
    output: null,
    loading: false,
    outputType: 'moderation'
  },
  {
    id: 'gpt4',
    title: 'GPT-4 Chat',
    description: 'Experience the latest GPT-4 model with improved context understanding and task performance.',
    code: `const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer $OPENAI_API_KEY'
  },
  body: JSON.stringify({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "What is the capital of France?" }
    ],
    max_tokens: 150
  })
});`,
    output: null,
    loading: false,
    outputType: 'chat'
  },
  {
    id: 'embedding',
    title: 'Text Embeddings',
    description: 'Generate vector representations of text using the latest embedding models for semantic analysis and similarity comparisons.',
    code: `const response = await fetch('https://api.openai.com/v1/embeddings', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer $OPENAI_API_KEY'
  },
  body: JSON.stringify({
    model: "text-embedding-3-small",
    input: "The quick brown fox jumps over the lazy dog",
    encoding_format: "float"
  })
});`,
    output: null,
    loading: false,
    outputType: 'embedding'
  }
];

const tabs: TabProps[] = [
  { id: 'image', label: 'Image', icon: Image, content: null },
  { id: 'speech', label: 'Speech', icon: Volume2, content: null },
  { id: 'transcription', label: 'Transcription', icon: Mic, content: null },
  { id: 'moderation', label: 'Moderation', icon: Shield, content: null },
  { id: 'chat', label: 'Chat', icon: MessageSquare, content: null },
  { id: 'embedding', label: 'Embedding', icon: Brain, content: null },
];

const mockApiResponses = {
  dalle: {
    url: "/examples/mystical-library.jpeg",
    revised_prompt: "A mystical library at night with floating books and glowing crystals, featuring ancient tomes suspended in mid-air, illuminated by ethereal crystal formations casting a magical blue-purple light throughout the space. Digital art style with intricate details and dramatic lighting."
  },
  tts: {
    audio_url: "/examples/demo-speech.mp3",
    duration: 3.5
  },
  whisper: {
    text: "Welcome to the future of AI speech recognition. This technology can understand multiple languages and accents with remarkable accuracy.",
    confidence: 0.98,
    language: "en",
    words: [
      { word: "Welcome", start: 0.0, end: 0.5, confidence: 0.99 },
      { word: "to", start: 0.5, end: 0.7, confidence: 0.98 }
    ]
  },
  moderation: {
    id: "modr-12345",
    model: "omni-moderation-latest",
    results: [{
      flagged: false,
      categories: {
        harassment: false,
        "harassment/threatening": false,
        hate: false,
        "hate/threatening": false,
        "self-harm": false,
        sexual: false,
        "sexual/minors": false,
        violence: false,
        "violence/graphic": false
      },
      category_scores: {
        harassment: 0.0001,
        "harassment/threatening": 0.0001,
        hate: 0.0001,
        "hate/threatening": 0.0001,
        "self-harm": 0.0001,
        sexual: 0.0001,
        "sexual/minors": 0.0001,
        violence: 0.0001,
        "violence/graphic": 0.0001
      }
    }]
  },
  gpt4: {
    choices: [{
      message: {
        role: "assistant",
        content: "The capital of France is Paris. It's often called the 'City of Light' (Ville Lumière) and is known for its iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral."
      }
    }]
  },
  embedding: {
    model: "text-embedding-3-small",
    embeddings: Array.from({ length: 1536 }, () => (Math.random() * 2 - 1) * 0.1),
    dimensions: 1536
  }
};

function App() {
  const [activeTab, setActiveTab] = useState('image');
  const [demos, setDemos] = useState<DemoData[]>(initialDemos);

  const handleRun = async (id: string) => {
    setDemos(prev => prev.map(demo =>
        demo.id === id ? { ...demo, loading: true } : demo
    ));

    const minDelay = 800;
    const maxDelay = 2000;
    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    await new Promise(resolve => setTimeout(resolve, randomDelay));

    setDemos(prev => prev.map(demo => {
      if (demo.id === id) {
        const response = mockApiResponses[demo.id as keyof typeof mockApiResponses];
        return {
          ...demo,
          loading: false,
          output: response
        };
      }
      return demo;
    }));
  };

  const filteredDemos = demos.filter(demo => {
    switch (activeTab) {
      case 'image':
        return demo.id === 'dalle';
      case 'speech':
        return demo.id === 'tts';
      case 'transcription':
        return demo.id === 'whisper';
      case 'moderation':
        return demo.id === 'moderation';
      case 'chat':
        return demo.id === 'gpt4';
      case 'embedding':
        return demo.id === 'embedding';
      default:
        return false;
    }
  });

  return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <h1 className="text-3xl font-bold text-gray-900">OpenAI Capabilities Demo</h1>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <TabNavigation
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
          />

          <div className="mt-8 grid gap-6 grid-cols-1">
            {filteredDemos.map(demo => (
                <DemoCard
                    key={demo.id}
                    data={demo}
                    onRun={handleRun}
                />
            ))}
          </div>
        </main>
      </div>
  );
}

export default App;