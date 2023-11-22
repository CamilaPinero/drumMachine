/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

interface DrumPadI {
	btnId: string;
	audioId: string;
	src: string;
	setSoundName: (btnId: string) => void;
}

const DrumPad = ({ btnId, audioId, src, setSoundName }: DrumPadI) => {
	const audioTag = useRef<HTMLAudioElement>(null);

	function handleClick() {
		const audio = audioTag.current;

		if (audio) {
			audio.pause();
			audio.currentTime = 0;
			audio.play();
		}
		setSoundName(btnId);
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key.toUpperCase() === audioId) {
			handleClick();
		}
	}

	useEffect(() => {
		window.addEventListener("keydown", (e) => handleKeyDown(e));
	}, [setSoundName]);

	return (
		<button id={btnId} className="drum-pad" onClick={handleClick}>
			<audio
				autoPlay
				className="clip"
				id={audioId}
				src={src}
				ref={audioTag}
			></audio>

			{audioId}
		</button>
	);
};

export default DrumPad;
