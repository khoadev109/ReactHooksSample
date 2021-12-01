import './App.css';
import UseEffectSample from './components/useEffectSample/useEffectSample';
import UseContextSample, { ThemeContext, themes } from './components/useContextSample/useContextSample';
import UseReducerSample from './components/useReducerSample/useReducerSample';
import UseCustomHookSample from './components/useCustomHookSample/useCustomHookSample';

function App() {
  return (
    <div className="App">
      Use Effect:
      <UseEffectSample />
      <br />
      <br />
      Use Context:
      <ThemeContext.Provider value={themes.dark}>
        <UseContextSample />
      </ThemeContext.Provider>
      <br />
      <br />
      Use Reducer:
      <UseReducerSample />
      <br />
      <br />
      Use Custom Hook:
      <UseCustomHookSample />
    </div>
  );
}

export default App;




