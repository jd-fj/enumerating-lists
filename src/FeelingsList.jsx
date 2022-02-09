import { getFeelingCategories, getFeelingNames } from "./allFeelings";
import Categories from "./Categories";
import Names from "./Names";

export default function FeelingsList(props) {
  const categories = getFeelingCategories();
  const names = getFeelingNames();
  return (
    <>
      <Categories categories={categories} />
      <Names names={names} />
    </>
  );
}
