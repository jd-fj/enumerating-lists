import {getFeelings} from "./allFeelings"
import { v4 as uuidv4 } from 'uuid';

// const feelingCategories = allFeelings.map((feeling) => 
//   <li key={uuidv4()}>{feeling.category}</li>
// );
export default function FormattedFeelings() {
  const allFeelings = getFeelings();
  const getAllCategories = allFeelings.map((feeling) => 
    feeling.category
  );
  const removeDupes = [...new Set(getAllCategories)]
  const dedupedSet = removeDupes.map((feeling) =>
  <li key={uuidv4()}>
      {feeling}
    </li>
  );
  // console.log(dedupedSet)
  const getAllFeelingNames = allFeelings.map((feeling) => 
    feeling.name
  );
  // console.log(getAllFeelingNames)
  const removeDuplicateNames = [...new Set(getAllFeelingNames)]
  const dedupedFeelings = removeDuplicateNames.map((name) => 
  <li key={uuidv4()}>
    {name}
  </li>
  )

  return (
    <>
      <ul>{dedupedSet}</ul>
      <ol>{dedupedFeelings}</ol>
    </>
  );
}
