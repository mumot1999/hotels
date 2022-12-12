import starOn from './star-on.png';
import starOff from './star-off.png';

export interface StarProps {
  mode: 'on' | 'off' | 'ghost';
  clickable?: boolean;
}

const StarOn = () => <img src={starOn} />;
const StarOff = () => <img src={starOff} />;

export function Star(props: StarProps) {
  return (
    <div
      style={{
        display: 'flex',
        ...(props.clickable ? { cursor: 'pointer' } : {}),
      }}
    >
      {props.mode === 'on' ? <StarOn /> : <StarOff />}
    </div>
  );
}

export default Star;
