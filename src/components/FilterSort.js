import { Checkbox, FormField, Form } from "semantic-ui-react";

export default function FilterSort({ filtered, filterHogs, setSort }) {
  return (
    <>
      <Checkbox
        toggle
        label="Show Greasy Pigs"
        value={filtered}
        onChange={filterHogs}
      />
      <select onChange={setSort}>
        <option>Sort Hogs By</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </>
  );
}
