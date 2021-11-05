import { useEffect } from "react";
import { useSelector } from "react-redux";

export const Test = () => {
  const state = useSelector((s) => s);
  useEffect(() => {
    console.log("cane", state);
    console.log(2);
  }, [state]);
  return <div>asdsasdas2</div>;
};
