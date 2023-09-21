import Radio from "./Radio";
import Waveform from "./Waveform";

export default function Experience({ station, setStation }) {
  return (
    <>
      <Radio setStation={setStation} stationText={station} position={[-0.35, -1, 0]} />
      <Waveform station={station} />
      <ambientLight />
    </>
  );
}
