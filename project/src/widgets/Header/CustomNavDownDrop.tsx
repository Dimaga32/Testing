import {CSSTransition} from "react-transition-group";
import React from "react";
import {NavDropdown} from "react-bootstrap";
import {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ActionCreater, TypeDispatch, TypeReducerState} from "../../app/MainReducer";
export default function CustomNavDownDrop() {
    const [showDropdown,setShowDropdown]=useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const navDropdown=useRef<HTMLDivElement | null>(null);
    const dispatch:TypeDispatch = useDispatch();
    const isShowRegister = useSelector((state:TypeReducerState) => state.register.isShowRegister);
    const isShowLogin = useSelector((state:TypeReducerState) => state.login.isShowLogin);
    const { UserId } = useSelector((state:TypeReducerState) => state.user);
return(
<NavDropdown
    ref={navDropdown}
    className="center flex-grow-1 fs-2 w-100 text-center"
    title="User"
    id="basic-nav-dropdown"
    show={showDropdown}
    onToggle={():void => setShowDropdown(!showDropdown)}
    menuVariant="dropdown-center"
    onClick={(e:React.MouseEvent<HTMLButtonElement>):void=>e.stopPropagation()}
>
    <CSSTransition
        in={showDropdown}
        timeout={600}
        classNames="nav-menu-part"
        unmountOnExit
        nodeRef={dropdownRef}
        appear={true}
    >
        <div onClick={(e:React.MouseEvent<HTMLDivElement>):void=>e.stopPropagation()} ref={dropdownRef} style={{width:navDropdown.current?.offsetWidth || "auto"}}>
            <NavDropdown.Item className="center flex-grow-1 fs-2 w-100"
                onClick={():void=>{
                dispatch(ActionCreater("ShowRegister"))
                if(isShowLogin){dispatch(ActionCreater("HideLogin"))}}}>
            register</NavDropdown.Item>
            <NavDropdown.Item className="center flex-grow-1 fs-2 w-100"
                onClick={():void=>{
                dispatch(ActionCreater("ShowLogin"))
                if(isShowRegister){dispatch(ActionCreater("HideRegister"))}}}>
            login</NavDropdown.Item>
            <NavDropdown.Item className="center flex-grow-1 fs-2 w-100" href={`/Account#${UserId?UserId:""}`}>personal</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="center flex-grow-1 fs-2 w-100"
                              onClick={():void=>{
                                  dispatch(ActionCreater("Logout"))
                                  localStorage.removeItem('accessToken')
                                  localStorage.removeItem('refreshToken')
                              }}>
                exit</NavDropdown.Item>
        </div>
    </CSSTransition>
</NavDropdown>
)}