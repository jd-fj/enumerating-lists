import { getFeelingCategories } from "./allFeelings";
import { v4 as uuidv4 } from "uuid";

export default function Categories(props) {
  // const getAllCategories = getFeelingCategories();
  const getAllCategories = props.categories;
  const removeDupes = [...new Set(getAllCategories)];
  const listCategories = removeDupes.map((feeling) => (
    <li key={uuidv4()}>{feeling}</li>
  ));

  return <ul>{listCategories}</ul>;
}
