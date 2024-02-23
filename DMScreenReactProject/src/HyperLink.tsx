import "./App.css"

interface Props {
    linkString: string;
    textContent: string;
    classString: string;
  }

const HyperLink: React.FC<Props> = ({ textContent, linkString, classString }) => {

  function handleClick() {
    alert("bruh");
  }

  return (
      <button onClick={() => {alert("bruh");}} className={classString}> {textContent} </button>
  );
  }
  
  export default HyperLink;