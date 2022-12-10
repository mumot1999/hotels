import starOn from './star-on.png';
import starOff from './star-off.png';

export interface StarProps {
  mode: 'on' | 'off' | 'ghost';
}

export function Star(props: StarProps) {
  if (props.mode === 'off') {
    return (
      <div style={{display: "flex"}}>
        <img src={starOff} />
      </div>
    );
  }
  return <img src={starOn} />;
}

export default Star;
