export interface DemoData {
  id: string;
  title: string;
  description: string;
  code: string;
  output: any;
  loading: boolean;
  outputType: 'image' | 'audio' | 'transcription' | 'moderation' | 'chat' | 'embedding';
}

export interface DemoComponentProps {
  output: any;
}

export interface TabProps {
  id: string;
  label: string;
  icon: React.ComponentType;
  content: React.ReactNode;
}