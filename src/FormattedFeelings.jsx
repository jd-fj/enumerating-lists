import {getFeelings} from "./allFeelings"
import {getFeelingCategories} from "./allFeelings"
import {getFeelingNames} from "./allFeelings"
import { v4 as uuidv4 } from 'uuid';

// const feelingCategories = allFeelings.map((feeling) => 
//   <li key={uuidv4()}>{feeling.category}</li>
// );
export default function FormattedFeelings() {
  // const allFeelings = getFeelings();

  const getAllCategories = getFeelingCategories();
  const removeDupes = [...new Set(getAllCategories)]
  const listCategories = removeDupes.map((feeling) =>
  <li key={uuidv4()}>
      {feeling}
    </li>
  );
  
  const getAllFeelingNames = getFeelingNames();
  const removeDuplicateNames = [...new Set(getAllFeelingNames)]
  const listNames = removeDuplicateNames.map((name) => 
  <li key={uuidv4()}>
    {name}
  </li>
  )

  return (
    <>
      <ul>{listCategories}</ul>
      <ol>{listNames}</ol>
    </>
  );
}
