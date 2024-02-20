import "./App.css"

interface Props {
    linkString: string;
    textContent: string;
  }

const Link: React.FC<Props> = ({ textContent, linkString }) => {
    return (
        <a href={linkString}> {textContent} </a>
    );
  }
  
  export default Link;