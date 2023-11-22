import { useState } from "react";
import DrumPad from "./DrumPad";

export const DrumMachine = () => {
	const [soundName, setSoundName] = useState("");

	return (
		<div id="drum-machine">
			<h1>BaDumTss</h1>
			<div className="drum-pads">
				<DrumPad
					setSoundName={setSoundName}
					btnId="heater1"
					audioId="Q"
					src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
				/>
				<DrumPad
					setSoundName={setSoundName}
					btnId="heater2"
					audioId="W"
					src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
				/>
				<DrumPad
					setSoundName={setSoundName}
					btnId="heater3"
					audioId="E"
					src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
				/>
				<DrumPad
					setSoundName={setSoundName}
					btnId="heater4"
					audioId="A"
					src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
				/>
				<DrumPad
					setSoundName={setSoundName}
					btnId="clap"
					audioId="S"
					src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
				/>
				<DrumPad
					setSoundName={setSoundName}
					btnId="openHH"
					audioId="D"
					src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
				/>
				<DrumPad
					setSoundName={setSoundName}
					btnId="kicknHat"
					audioId="Z"
					src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
				/>
				<DrumPad
					setSoundName={setSoundName}
					btnId="kick"
					audioId="X"
					src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
				/>
				<DrumPad
					setSoundName={setSoundName}
					btnId="closedHH"
					audioId="C"
					src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
				/>
			</div>
			<p id="display">{soundName}</p>
		</div>
	);
};
