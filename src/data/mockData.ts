export const mockApiResponses = {
  dalle: {
    url: "https://images.unsplash.com/photo-1703631934792-fa1ce2f02a00?w=800&auto=format&fit=crop",
    revised_prompt: "A serene mountain landscape at sunset"
  },
  tts: {
    audio_url: "https://example.com/audio.mp3",
    duration: 3.5
  },
  whisper: {
    text: "Hello, this is a transcription of the audio file.",
    confidence: 0.98
  },
  moderation: {
    flagged: false,
    categories: {
      hate: false,
      "hate/threatening": false,
      "self-harm": false,
      sexual: false,
      "sexual/minors": false,
      violence: false,
      "violence/graphic": false
    },
    scores: {
      hate: 0.0,
      "hate/threatening": 0.0,
      "self-harm": 0.0,
      sexual: 0.0,
      "sexual/minors": 0.0,
      violence: 0.0,
      "violence/graphic": 0.0
    }
  },
  gpt4: {
    response: "This is a quick response from GPT-4.",
    finish_reason: "stop",
    usage: {
      prompt_tokens: 10,
      completion_tokens: 20,
      total_tokens: 30
    }
  }
};