// import { getFeelingNames } from "./allFeelings";
import { v4 as uuidv4 } from "uuid";

export default function Names(props) {
  // const getAllFeelingNames = getFeelingNames();
  const getAllFeelingNames = props.names;
  const removeDuplicateNames = [...new Set(getAllFeelingNames)];
  const listNames = removeDuplicateNames.map((name) => (
    <li key={uuidv4()}>{name}</li>
  ));

  return (
    <>
      <ol>{listNames}</ol>
    </>
  );
}
