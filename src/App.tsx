import { useState } from "react";
import { SelectItem, SelectOption } from "./SelectItem";
import styles from "./style.module.css";
import Footer from "./FooterBar";

const options = [
  { label: "Select First Item", value: 1 },
  { label: "Select Second Item", value: 2 },
  { label: "Select Third Item", value: 3 },
  { label: "Select Fourth Item", value: 4 },
  { label: "Select Fifth Item", value: 5 },
  { label: "Select Sixth Item", value: 6 },
];

function App() {
  const [value1, setValue1] = useState<SelectOption | undefined>(options[0]);
  const [value2, setValue2] = useState<SelectOption[]>([options[0]]);

  return (
    <div>
      <h4 className={styles.center}>Single Select DropDown</h4>

      <SelectItem
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
      <br />
      <h4 className={styles.center}>MultiSelect DropDown</h4>
      <SelectItem
        multiple
        options={options}
        value={value2}
        onChange={(o) => setValue2(o)}
      />
     <Footer />
    </div>
  );
}

export default App;
