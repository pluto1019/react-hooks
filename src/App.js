import { useInput, useTabs } from './libs/jooks';

const App = () => {
  return (
    <div className='App'>
      <h1>Jooks example</h1>

      <UseJooks title='useInput'>
        <UseInput />
      </UseJooks>

      <UseJooks title='useTabs'>
        <UseTabs />
      </UseJooks>
    </div>
  );
};

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

const UseTabs = () => {
  const content = [
    {
      tab: 'Sec 1',
      content: 'section 1 content',
    },
    {
      tab: 'Sec 2',
      content: 'section 2 content',
    },
  ];

  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <>
      {content.map((section, index) => (
        <button key={section.tab} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </>
  );
};

export default App;
