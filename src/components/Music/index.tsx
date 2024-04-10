import Music from "@/components/Music/Music"

interface MusicUIProps {
    viewPort?: string
}

const MusicUI: React.FC<MusicUIProps> = ({ viewPort }) => {
    return (
        <div className="flex-col justify-center items-center md:flex m-0 h-fit w-fit border rounded-lg">
            {viewPort === "mobile" ? <Music viewPort="mobile" /> : <Music />}
        </div>
    )
}

export default MusicUI
