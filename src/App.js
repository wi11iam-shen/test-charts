import './App.css';
import data from './data/data.json';

import SimpleLineChart from './SimpleLineChart';
import SynchronizedLineChart from './SynchronizedLineChart';
import AreaChart from './AreaChart';
import PromoPrediction from './PromoPrediction';
import MUIPieChart from './MUIPieChart';

function App() {
  return (
    <>
      <SimpleLineChart data={data}/>
      <SynchronizedLineChart data={data}/>
      <AreaChart data={data}/>
      <PromoPrediction />
      <MUIPieChart />
    </>
  );
}

export default App;
