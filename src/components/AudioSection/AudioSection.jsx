import { FaMusic } from 'react-icons/fa';
import { GoMute, GoUnmute } from 'react-icons/go';
import { music } from '../../audio';
import { useAudio } from '../helpers';
import { StyledAudioSection } from './AudioSection.styled';

const AudioSection = ({ handleMuteSounds, mute }) => {
  const [playing, toggle] = useAudio(music);

  return (
    <StyledAudioSection
      playing={playing}
      mute={mute}
    >
      <button
        className='game--music'
        onClick={toggle}
      >
        <FaMusic />
      </button>
      <button
        className='game--audio'
        onClick={handleMuteSounds}
      >
        {mute ? <GoMute /> : <GoUnmute />}
      </button>
    </StyledAudioSection>
  );
};

export default AudioSection;
