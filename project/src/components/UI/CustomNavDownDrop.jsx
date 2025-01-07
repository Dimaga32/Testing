import {CSSTransition} from "react-transition-group";
import {NavDropdown} from "react-bootstrap";
import React, {useState, useRef, useEffect, use} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ActionCreater} from "../Redux/MainReducer";
export default function CustomNavDownDrop(props) {
    const [showDropdown,setShowDropdown]=useState(false)
    const dropdownRef = useRef(null);
    const navDropdown=useRef(`1px`);
    const dispatch = useDispatch();
    const isShowRegister = useSelector((state) => state.register.isShowRegister);
    const isShowLogin = useSelector((state) => state.login.isShowLogin);
    const { UserId, isLoaded, UserName, UserEmail } = useSelector((state) => state.user);
    console.log("UserId from Redux:", UserId);
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
                dispatch(ActionCreater("ShowRegister"))
                if(isShowLogin){dispatch(ActionCreater("HideLogin"))}}}>
            register</NavDropdown.Item>
            <NavDropdown.Item className="center flex-grow-1 fs-2 w-100"
                onClick={()=>{
                dispatch(ActionCreater("ShowLogin"))
                if(isShowRegister){dispatch(ActionCreater("HideRegister"))}}}>
            login</NavDropdown.Item>
            <NavDropdown.Item className="center flex-grow-1 fs-2 w-100" href={`/Account#${UserId?UserId:""}`}>personal</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="center flex-grow-1 fs-2 w-100"
                              onClick={()=>{
                                  dispatch(ActionCreater("Logout"))
                                  localStorage.removeItem('accessToken')
                                  localStorage.removeItem('refreshToken')
                              }}>
                exit</NavDropdown.Item>
        </div>
    </CSSTransition>
</NavDropdown>
)}