import NavigationBar from "../UI/nav";
import CodeArea from "../UI/CodeArea";
import {javascript} from "@codemirror/lang-javascript";
export  default function JS(props) {
    return (
        <div>
            <NavigationBar/>
            <CodeArea lang='javascript'/>
        </div>
    )
}