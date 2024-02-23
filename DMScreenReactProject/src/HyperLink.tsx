import "./App.css"

interface Props {
    linkString: string;
    textContent: string;
    classString: string;
  }

const HyperLink: React.FC<Props> = ({ textContent, linkString, classString }) => {

  function handleClick() {
    console.log('You clicked me!');
  }

  return (
      <div onClick={handleClick} className={classString}> {textContent} </div>
  );
  }
  
  export default HyperLink;