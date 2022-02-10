import { getFeelingCategories, getFeelingNames } from "./allFeelings";
import Categories from "./Categories";
import Names from "./Names";

export default function FeelingsList(props) {
  const categories = getFeelingCategories();
  const names = getFeelingNames();
  return (
    <>
      <div
        style={{
          display: "flex",
          borderRight: "solid black 1px",
        }}
      >
        <Categories categories={categories} />
        <Names names={names} />
      </div>
    </>
  );
}
