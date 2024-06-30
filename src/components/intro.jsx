import { useEffect, useState } from "react";

export default function Intro({ onSlide }) {

    function handleClick() {
        alert("Hello world");
    }


    return (
        <main
            className="main">
            <section className="main__content">
                <div className="main__content__intro1">
                    <h1>Happy birthday</h1>
                    <h2>Ngô Bảo Trung <br></br> 29/06/2005</h2>
                </div>
                <div className="main__content__intro2">
                    <p>Chúc mừng sinh nhật ông cháu Trung nhé, đây là phần quà đặc biệt của chúng tôi dành tặng cho Trung.</p>
                    <p>Hãy bắt đầu khám phá những điều thú vị ở trang web này nào.</p>
                </div>
                <div className="main__content__button">
                    <button
                        onClick={onSlide}>
                        Khám phá
                    </button>
                </div>
            </section>
            <section className="main__image">
                <img src="https://static.vecteezy.com/system/resources/previews/024/742/863/original/birthday-cake-vector-illustration-png.png" />
            </section>
        </main>
    )
}