import PageHeaderBox from "./PageHeaderBox";
import Box from "./box";
import './App.css';



function App() {
  return (
    <div className="GridWrap">
        <PageHeaderBox/>
        <Box classString="b square"></Box>
        <Box classString="c square"></Box>
        <Box classString="d square"></Box>
        <Box classString="e square"></Box>
        <Box classString="f square"></Box>
        <Box classString="g square"></Box>
    </div>
  );
}

export default App;