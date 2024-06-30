import { createElement, useEffect, useState } from "react"
import { Routes, Route, Link } from 'react-router-dom'
import "@fontsource/poppins"
import "@fontsource/noto-sans"
import "@fontsource/roboto"
import "@fontsource/lora"
import "@fontsource/montserrat"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHome, faInfo, faListCheck } from "@fortawesome/free-solid-svg-icons"
import './styles.css'
import Navigationbars from './navbar'
import Intro from "./intro"
import Content from "./content"
import Introduce from "./introduce"
import Wish from "./wish"


export default function Container() {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [activateBars, setActivateBars] = useState(() => {
        if (innerWidth <= 600) {
            return true;
        }
        return false;
    });
    const [nav, setNav] = useState(false);
    const [index, setIndex] = useState(0);
    const Slide = [
        <Intro onSlide={handleSlide} />,
        <Content />];

    function handleSlide() {
        setIndex(index + 1);
    }

    function handleToggleNav() {
        setNav(!nav);
    }

    function handleNoneNav() {
        setNav(false);
    }

    function handleResize() {
        setInnerWidth(window.innerWidth);
    }

    const navbarMobile = () => {
        if (innerWidth > 600) {
            return {};
        } else if (nav) {
            return {
                width: '200px'
            }
        } else {
            return {
                width: '0px'
            }
        }
        
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        const navbar = document.querySelector('.navbar');
        if (innerWidth <= 600) {
            navbar.style.width = '0px'
        } else {
            navbar.style.width = 'auto'
        }

        return () => window.removeEventListener('resize', handleResize);
    }, [innerWidth]);

    return (
        <div className="container">
            <nav
                className="navbar"
                style={navbarMobile()}>
                <div
                    className="logo"
                    onClick={handleToggleNav}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="link" onClick={handleNoneNav}>
                    <div>
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className="link" onClick={handleNoneNav}>
                    <div>
                        <FontAwesomeIcon icon={faListCheck} />
                    </div>
                    <Link to="/wish">Dự định</Link>
                </div>
                <div className="link" onClick={handleNoneNav}>
                    <div>
                        <FontAwesomeIcon icon={faInfo} />
                    </div>
                    <Link to="/introduce">Giới thiệu</Link>
                </div>
            </nav>
            <div
                className="barsIcon"
                onClick={handleToggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div 
            className="overlay" 
            style={nav ? {visibility: 'visible', opacity: '1'} : {visibility: 'hidden', opacity: '0'}}
            onClick={() => setNav(!nav)}></div>

            <Routes>
                <Route path="/" element={Slide[index]} />
                <Route path="/wish" element={<Wish />} />
                <Route path="/introduce" element={<Introduce />} />
            </Routes>
        </div>
    )
}