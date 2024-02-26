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
      <div onClick={() => {alert("bruh");}} className={classString}> {textContent} </div>
  );
  }
  
  export default HyperLink;