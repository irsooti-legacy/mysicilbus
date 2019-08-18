import React, {useEffect} from 'react';

import { getDepartureList } from './api';
import PullmanTimeTables from './PullmanTimeTables/PullmanTimeTables';

function App() {


  return (
    <div className="App">
      <PullmanTimeTables></PullmanTimeTables>
    </div>
  );
}

export default App;
