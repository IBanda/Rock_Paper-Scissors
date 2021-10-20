import { render } from "react-dom";
import GlobalStyles from './components/GlobalStyles';
import App from "./App";

const rootElement = document.getElementById("root");
render(
<>
<GlobalStyles/>
<App />
</>, rootElement);
