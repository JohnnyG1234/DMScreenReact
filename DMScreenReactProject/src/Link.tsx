import "./App.css"

interface Props {
    linkString: string;
    textContent: string;
    classString: string
  }

const Link: React.FC<Props> = ({ textContent, linkString, classString }) => {
    return (
        <a className={classString} href={linkString}> {textContent} </a>
    );
  }
  
  export default Link;