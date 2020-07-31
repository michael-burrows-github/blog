import React, { useState } from "react";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <ToggleSwitch
        isToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      />
    </div>
  );
}

export default App;
