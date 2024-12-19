import NavigationBar from "../UI/nav";
import CodeArea from "../UI/CodeArea";
export  default function Python(props) {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <CodeArea lang='python'/>
        </div>
    )
}