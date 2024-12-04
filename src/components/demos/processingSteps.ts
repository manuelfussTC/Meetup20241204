export const PROCESSING_STEPS = {
    image: [
        'Analyzing prompt and generating variations',
        'Applying style enhancements',
        'Performing safety checks',
        'Finalizing image output'
    ],
    audio: [
        'Processing text and analyzing pronunciation',
        'Generating voice patterns',
        'Creating natural speech patterns',
        'Finalizing audio output'
    ],
    transcription: [
        'Loading audio file',
        'Analyzing audio patterns',
        'Converting speech to text',
        'Generating timestamps',
        'Finalizing transcription'
    ],
    moderation: [
        'Analyzing content',
        'Checking categories',
        'Computing confidence scores',
        'Generating report'
    ],
    chat: [
        'Processing input',
        'Analyzing context',
        'Generating response',
        'Finalizing reply'
    ],
    embedding: [
        'Tokenizing input',
        'Computing embeddings',
        'Normalizing vectors',
        'Preparing visualization'
    ]
};