// CAP Hero — Tweaks panel
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mood": "gallery",
  "cinema": "balanced",
  "entrance": "glide"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    if (window.__cap) {
      window.__cap.setMood(t.mood);
      window.__cap.setCinema(t.cinema);
      window.__cap.setEntrance(t.entrance);
    }
    document.documentElement.setAttribute('data-entrance', t.entrance);
  }, [t.mood, t.cinema, t.entrance]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood" />
      <TweakRadio label="Palette" value={t.mood}
                  options={['gallery', 'twilight', 'ochre']}
                  onChange={(v) => setTweak('mood', v)} />

      <TweakSection label="Cinema" />
      <TweakRadio label="Pace" value={t.cinema}
                  options={['slow', 'balanced', 'quick']}
                  onChange={(v) => setTweak('cinema', v)} />

      <TweakSection label="Entrance" />
      <TweakRadio label="Arrival" value={t.entrance}
                  options={['glide', 'drop', 'bloom']}
                  onChange={(v) => setTweak('entrance', v)} />
    </TweaksPanel>
  );
}

const root = ReactDOM.createRoot(document.getElementById('tweaks-root'));
root.render(<App />);
