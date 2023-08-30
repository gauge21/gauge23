import { useContext } from "react";
import { TeamsFxContext } from "./Context";
import config from "../config";
import { Layout } from "./Layout";

const showFunction = Boolean(config.apiName);

export default function Tab() {
  const { themeString } = useContext(TeamsFxContext);
  return (
    <div
      className={themeString === "default" ? "light" : themeString === "dark" ? "dark" : "contrast"}
    >
      <Layout />
    </div>
  );
}
