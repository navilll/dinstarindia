"use client"
import { useContext, useEffect, useReducer, useState } from "react";
import Image from 'next/image';
import  IMAGES  from './theme';
import Link from 'next/link';
import { Context, MenuList, MenuList2 } from "./ThemContaxt";
import { usePathname } from "next/navigation";


const reducer = (previousState: Element, updatedState: any) => {
  return {
    ...previousState,
    ...updatedState,
  };
};

const initialState = {
  activeSubmenu: "",
};

const Header = () => {
    const [searchBar, setSearchBar] = useState<boolean>(false)
    const [subscribeModel, setSubscribeModel] = useState<boolean>(false)
    const [mobileSidebar, setMobileSidebar] = useState<boolean>(false);
    const [headerfix, setHeaderfix] = useState<number>(0);    
    const [menuactive, setMenuactive] = useState("");
    const { setleftSidebar } = useContext(Context);
    const pathName = usePathname();
    
    
    const [state, setState] = useReducer(reducer, initialState);
    const menuHandler = (status: string) => {
        setState({ activeSubmenu: status });
        if (state.activeSubmenu === status) {
            setState({ activeSubmenu: "" });
        }
    };
    

    const FixesHeader = () => {
        setHeaderfix(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener("scroll", FixesHeader);
        return () => {
            window.removeEventListener("scroll", FixesHeader);
        };
    }, [headerfix]);
    
    useEffect(() => {
        MenuList.map((item) => {
            item.child?.map((data) => {
                if (data.to === pathName) {
                setMenuactive(item.menu);
                }
            });
        });
        MenuList2.map((item) => {
            if (item?.to === pathName) {
                setMenuactive(item.menu);
            }
            item.child?.map((data) => {
                if (data?.to === pathName) {
                    setMenuactive(item.menu);
                }
            });
        });
    }, [pathName]);
    return (
        <>        
            <header className="site-header mo-left header center style-1">		
                <div className={`sticky-header main-bar-wraper navbar-expand-lg ${ headerfix > 50 ? "is-fixed" : ""}`}>
                    <div className="main-bar clearfix ">
                        <div className="container-fluid clearfix">            
                            <div className="logo-header mostion logo-dark">
                                <Link href="#" scroll={false}>
                                    <Image src={IMAGES.logo} alt="" />
                                </Link>
                            </div>                        
                            <button  type="button" 
                                onClick={() => {setMobileSidebar(!mobileSidebar);}}
                                className={`navbar-toggler collapsed navicon justify-content-end ${mobileSidebar ? "open" : ""}`}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <Link href="#" scroll={false} className="search-link" id="quik-search-btn"
                                        onClick={()=>setSearchBar(true)}
                                    >
                                        <i className="flaticon-loupe" />
                                    </Link>
                                    <Link href="#" scroll={false} data-bs-toggle="modal"  
                                        className="btn shadow-primary btn-primary login-btn"
                                        onClick={()=>setSubscribeModel(true)}
                                    >
                                        <i className="flaticon-email scale3" />
                                        <span>SUBSCRIBE NOW</span>
                                    </Link>
                                </div>
                            </div>
                            
                            <div className={`dz-quik-search ${searchBar ? 'On': ''}`} style={{display: 'block'}}>
                                <form action="#">
                                    <input name="search" defaultValue="" type="text" className="form-control" placeholder="Enter Your Keyword ..." />
                                    <span  id="quik-search-remove"
                                        onClick={()=>setSearchBar(false)}
                                    >
                                        <i className="ti-close" />
                                    </span>
                                </form>
                            </div>
                            <div className="sidebar-menu">
                                <div className="menu-btn navicon"
                                    onClick={()=>setleftSidebar(true)}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h6 className="phone-no">+91 987 654 3210</h6>
                            </div>
                            <div 
                                className={`header-nav navbar-collapse justify-content-center ${ mobileSidebar ? "show" : ""}`}
                                id="navbarNavDropdown"
                            >
                                <div className="logo-header logo-dark">
                                    <Link href="/">
                                        <Image src={IMAGES.logo} alt="" />
                                    </Link>
                                </div>
                                <ul className="nav navbar-nav navbar navbar-left">
                                    {MenuList.map((item, ind) => {
                                        const hasChildren = Boolean(item.child?.length);
                                        return (
                                            <li className={`${hasChildren ? "sub-menu-down" : ""} ${menuactive == item.menu ? "active" : ""}
                                                ${hasChildren && state.activeSubmenu === item.menu ? "open" : ""}
                                            `}
                                                key={ind}
                                            >
                                                {hasChildren ? (
                                                    <>
                                                        <Link href="#" onClick={() => menuHandler(item.menu)}>{item.menu}</Link>
                                                        <ul className="sub-menu">
                                                            {item.child?.map((data, index) => (
                                                                <li key={index}>
                                                                    <Link href={data.to}>{data.children}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </>
                                                ) : (
                                                    <Link href={item.to ?? "/"}>{item.menu}</Link>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                                <ul className="nav navbar-nav navbar navbar-right">
                                    {MenuList2.map((item, ind) => {
                                        const { menu, child, className } = item;
                                        if (className === "menu-down" && child?.length) {
                                            return (
                                                <li className={`sub-menu-down ${ menuactive == item.menu ? "active" : ""}
                                                    ${state.activeSubmenu === item.menu ? "open" : ""}`}
                                                    key={ind}
                                                >
                                                    <Link href="#" scroll={false} 
                                                        onClick={() => {
                                                            menuHandler(item.menu);
                                                        }}
                                                    >
                                                        {menu}
                                                    </Link>
                                                    <ul className="sub-menu">
                                                        {child?.map((data, index) => (
                                                            <li key={index}>
                                                                <Link href={data.to}>{data.children}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            );
                                        } else {
                                            return (
                                                <li key={ind}>
                                                    <Link href={`${item?.to}`}>{item.menu}</Link>
                                                </li>
                                            );
                                        }
                                    })}
                                </ul>
                                <div className="dz-social-icon">
                                    <ul>
                                        <li><Link className="fab fa-facebook-f" href="#"></Link></li>
                                        <li><Link className="fab fa-twitter" href="#"></Link></li>
                                        <li><Link className="fab fa-linkedin-in" href="#"></Link></li>
                                        <li><Link className="fab fa-instagram" href="#"></Link></li>
                                    </ul>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`modal fade inquiry-modal ${subscribeModel ? 'show': ''}`}
                style={{display : subscribeModel ? 'block' : 'none'}}
                id="exampleModal" tabIndex={-1} role="dialog"  aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered" style={{marginTop : '10%'}} >
                    <div className="inquiry-adv">
                        <Image src={IMAGES.ModalImage} alt=""/>
                    </div>
                    <div className="modal-content">
                        <div className="modal-header">
                            <i className="flaticon-email" />
                            <h5 className="modal-title" id="exampleModalLongTitle">SUBSCRIBE TO OUR NEWSLATTER</h5>
                            <button type="button" className="btn-close" onClick={()=>setSubscribeModel(false)}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="dzSubscribeMsg"></div>
                            <form className="dzSubscribe" >
                                <div className="form-group mb-3">
                                    <input type="text" name="dzName" required className="form-control" placeholder="YOUR NAME" />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="email" name="dzEmail" required className="form-control" placeholder="YOUR EMAIL ADDRESS" />
                                </div>
                                <div className="form-group text-center">
                                    <button name="submit" type="submit" 
                                        // value="Submit" 
                                        className="btn btn-primary"
                                    >
                                        SUBSCRIBE NOW
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={` fade ${subscribeModel ? 'modal-backdrop show': ''}`}></div>
        </>
    );
};

export default Header;