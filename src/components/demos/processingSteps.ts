interface ProcessingStep {
    label: string;
    tooltip: string;
}

export const PROCESSING_STEPS: Record<string, ProcessingStep[]> = {
    image: [
        {
            label: 'Analyzing prompt and generating variations',
            tooltip: 'DALL-E analyzes your text prompt for key elements, style preferences, and composition details to understand the intended image'
        },
        {
            label: 'Applying style refinements',
            tooltip: 'Adjusting the visual elements according to the specified style (vivid/natural) and quality settings'
        },
        {
            label: 'Performing safety checks',
            tooltip: 'Ensuring the generated image complies with content policies and safety guidelines'
        },
        {
            label: 'Finalizing image generation',
            tooltip: 'Rendering the final high-resolution image and applying post-processing enhancements'
        }
    ],
    audio: [
        {
            label: 'Processing text input',
            tooltip: 'Analyzing text for pronunciation, punctuation, and speech patterns'
        },
        {
            label: 'Applying voice characteristics',
            tooltip: 'Configuring the selected voice model (Alloy, Echo, Fable, etc.) with the specified characteristics'
        },
        {
            label: 'Generating speech patterns',
            tooltip: 'Creating natural intonation, emphasis, and rhythm based on the text content'
        },
        {
            label: 'Finalizing audio output',
            tooltip: 'Rendering the final audio with the specified speed and quality settings'
        }
    ],
    transcription: [
        {
            label: 'Processing audio input',
            tooltip: 'Loading and preprocessing the audio file for optimal recognition'
        },
        {
            label: 'Detecting speech patterns',
            tooltip: 'Identifying words, phrases, and language characteristics in the audio'
        },
        {
            label: 'Generating timestamped text',
            tooltip: 'Converting speech to text while maintaining precise timing information'
        },
        {
            label: 'Applying language refinements',
            tooltip: 'Improving accuracy with language-specific models and contextual understanding'
        }
    ],
    moderation: [
        {
            label: 'Analyzing content',
            tooltip: 'Scanning input text for potential policy violations across multiple categories'
        },
        {
            label: 'Computing category scores',
            tooltip: 'Calculating confidence scores for each moderation category (harassment, hate speech, etc.)'
        },
        {
            label: 'Evaluating thresholds',
            tooltip: 'Comparing scores against safety thresholds to determine content acceptability'
        },
        {
            label: 'Generating detailed report',
            tooltip: 'Compiling comprehensive analysis with category-specific flags and scores'
        }
    ],
    chat: [
        {
            label: 'Processing input context',
            tooltip: 'Analyzing the conversation history and current message for context'
        },
        {
            label: 'Generating response candidates',
            tooltip: 'Creating multiple potential responses based on the context and input'
        },
        {
            label: 'Applying model parameters',
            tooltip: 'Refining responses using temperature and other specified settings'
        },
        {
            label: 'Finalizing output',
            tooltip: 'Selecting and formatting the most appropriate response'
        }
    ],
    embedding: [
        {
            label: 'Tokenizing input',
            tooltip: 'Breaking down input text into tokens for processing'
        },
        {
            label: 'Computing vector representations',
            tooltip: 'Generating high-dimensional vectors that capture semantic meaning'
        },
        {
            label: 'Optimizing embeddings',
            tooltip: 'Normalizing and adjusting vectors for optimal similarity comparisons'
        },
        {
            label: 'Preparing visualization',
            tooltip: 'Converting high-dimensional embeddings into visualizable format'
        }
    ]
};