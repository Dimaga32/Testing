import NavigationBar from "../UI/nav";
import {javascript} from "@codemirror/lang-javascript";
import CodeArea from "../UI/CodeArea";
export  default function Go(props) {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <CodeArea lang='go'/>
        </div>
    )
}