import './App.css';
import UseEffectSample from './components/useEffectSample/useEffectSample';
import UseContextSample, { ThemeContext, themes } from './components/useContextSample/useContextSample';
import UseReducerSample from './components/useReducerSample/useReducerSample';
import UseCustomHookSample from './components/useCustomHookSample/useCustomHookSample';
import UseReducerFetchDataSample from './components/useReducerFetchDataSample/useReducerFetchDataSample';
import UseCustomHookReducerSample from './components/useCustomHookReducerSample/useCustomHookReducerSample';

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
      <br/>
      <br/>
      Use Fetch Reducer:
      <UseReducerFetchDataSample />
      <br/>
      <br/>
      Use Custom Hook Reducer:
      <UseCustomHookReducerSample />
    </div>
  );
}

export default App;

