export const AudioOutput = ({ data }: { data: { audio_url: string } }) => (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <audio
            controls
            className="w-full"
            style={{ height: '40px' }}
        >
            <source src={data.audio_url} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    </div>
);