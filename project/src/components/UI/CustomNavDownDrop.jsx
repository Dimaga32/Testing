import {CSSTransition} from "react-transition-group";
import {NavDropdown} from "react-bootstrap";
import React,{useState,useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
export default function CustomNavDownDrop(props) {
    const [showDropdown,setShowDropdown]=useState(false)
    const dropdownRef = useRef(null);
    const navDropdown=useRef(`1px`);
    const dispatch = useDispatch();
    const isShowRegister = useSelector((state) => state.user.isShowRegister);
    const isShowLogin = useSelector((state) => state.user.isShowLogin);
return(
<NavDropdown
    ref={navDropdown}
    className="center flex-grow-1 fs-2 w-100 text-center"
    title="User"
    id="basic-nav-dropdown"
    show={showDropdown}
    onToggle={(expanded) => setShowDropdown(!showDropdown)}
    menuVariant="dropdown-center"
    onClick={(e)=>e.stopPropagation()}
>
    <CSSTransition
        in={showDropdown}
        timeout={600}
        classNames="nav-menu-part"
        unmountOnExit
        nodeRef={dropdownRef} // Передаем ref
        appear={true}
    >
        <div onClick={(e)=>e.stopPropagation()} ref={dropdownRef} style={{width:navDropdown.current.offsetWidth}}>
            <NavDropdown.Item className="center flex-grow-1 fs-2 w-100"
                onClick={()=>{
                dispatch({type:"ShowRegister"})
                if(isShowLogin){dispatch({type:"HideLogin"})}}}>
            register</NavDropdown.Item>
            <NavDropdown.Item className="center flex-grow-1 fs-2 w-100"
                onClick={()=>{
                dispatch({type:"ShowLogin"})
                if(isShowRegister){dispatch({type:"HideRegister"})}}}>
            login</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="center flex-grow-1 fs-2 w-100" href="/account/:">personal</NavDropdown.Item>
        </div>
    </CSSTransition>
</NavDropdown>
)}