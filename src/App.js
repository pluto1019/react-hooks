import { useInput } from './libs/jooks';

const UseJooks = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

const UseInput = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput('Mr.', maxLen);
  return <input placeholder='name' {...name} />;
};

const App = () => {
  return (
    <div className='App'>
      <h1>Jooks example</h1>

      <UseJooks title='useInput'>
        <UseInput />
      </UseJooks>
    </div>
  );
};

export default App;
