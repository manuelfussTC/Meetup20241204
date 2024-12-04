# OpenAI Capabilities Demo

A modern, interactive web application showcasing various OpenAI API capabilities including DALL-E 3 image generation, text-to-speech, transcription, content moderation, GPT-4 chat, and text embeddings.

## Features

- **DALL-E 3 Image Generation**: Create high-quality images with detailed prompts in vivid or natural styles
- **Text-to-Speech (HD)**: Convert text to ultra-realistic speech with multiple voice options
- **Whisper Transcription**: Accurate audio transcription with multi-language support
- **Content Moderation**: Check content against OpenAI's moderation guidelines
- **GPT-4 Chat**: Interactive chat with the latest GPT-4 model
- **Text Embeddings**: Generate vector representations for semantic analysis

## Tech Stack

- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Lucide React for icons
- React Syntax Highlighter for code formatting
- ESLint for code quality

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- OpenAI API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/manuelfussTC/Meetup20241204.git
cd Meetup20241204
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your OpenAI API key:
```env
VITE_OPENAI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
Meetup20241204/
├── src/
│   ├── components/       # React components
│   │   ├── demos/       # Demo-specific components
│   │   ├── common/      # Shared components
│   │   └── ...
│   ├── types/           # TypeScript type definitions
│   ├── data/            # Mock data and constants
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Component Overview

### DemoCard
The main component for displaying individual API demos. Features:
- Code snippet display with syntax highlighting
- Processing steps visualization
- Interactive demo controls
- Results display

### TabNavigation
Handles navigation between different API demos with:
- Responsive design
- Icon integration
- Active state management

### Demo-specific Components
Each API capability has dedicated components:
- ImageDemo
- AudioDemo
- TranscriptionDemo
- ModerationDemo
- ChatDemo
- EmbeddingDemo

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## Support

For support, please open an issue in the GitHub repository at https://github.com/manuelfussTC/Meetup20241204/issues

---

Demo project created for the Pure Code Meetup on December 4th, 2024