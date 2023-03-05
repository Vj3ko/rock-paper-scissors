import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { VscDebugRestart } from 'react-icons/vsc';
import { ThemeProvider } from 'styled-components';
import { ActionContainer, Container } from './App.styled';
import { click } from './audio';
import {
  AudioSection,
  Game,
  Header,
  ModeSwitcher,
  RulesModal,
} from './components';
import { playSound } from './components/helpers';
import { ButtonStyled, GlobalStyles } from './styles/';
import { theme } from './theme';

function App() {
  const [level, setLevel] = useState(() => {
    const selectedLevel = JSON.parse(localStorage.getItem('mode'));
    return selectedLevel || 'easy';
  });
  const [score, setScore] = useState(() => {
    const savedScore = JSON.parse(localStorage.getItem(level));
    return savedScore || 0;
  });
  const [showRules, setShowRules] = useState(false);
  const [mute, setMute] = useState(true);

  useEffect(() => {
    localStorage.setItem(level, score);
  }, [score]);

  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(level));
  }, [level]);

  function handleModeChoice(modeChosen) {
    setLevel(modeChosen);
    setScore(JSON.parse(localStorage.getItem(modeChosen)));
  }

  function handleScoreChange(result) {
    if (result === 'house') {
      if (score === 0) {
        return;
      } else {
        setScore(score - 1);
      }
    } else if (result === 'player') {
      setScore(score + 1);
    }
  }

  function handleShowRules() {
    setShowRules(prev => !prev);
    playSound(mute, click);
  }

  function handleReset() {
    setScore(0);
    playSound(mute, click);
  }

  function handleMuteSounds() {
    setMute(prev => !prev);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Container>
        <AnimatePresence>
          {showRules && (
            <RulesModal
              level={level}
              handleShowRules={handleShowRules}
            />
          )}
        </AnimatePresence>
        <Header
          score={score}
          level={level}
        />
        <Game
          level={level}
          handleScoreChange={handleScoreChange}
          mute={mute}
        />
        <ActionContainer>
          <ModeSwitcher
            level={level}
            handleModeChoice={handleModeChoice}
          />
          <VscDebugRestart onClick={handleReset} />
          <ButtonStyled onClick={handleShowRules}>Rules</ButtonStyled>
        </ActionContainer>

        <AudioSection
          handleMuteSounds={handleMuteSounds}
          mute={mute}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
