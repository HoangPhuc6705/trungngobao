import { useState } from "react";

export default function Content() {

    const bold = {
        fontWeight: 'bold'
    }
    const formatText = {
        textAlign: 'center',
        textIndent: '3em'
    }

    return (
        <main
            className="main">
            <section className="main__image">
                <img src="https://static.vecteezy.com/system/resources/previews/024/742/863/original/birthday-cake-vector-illustration-png.png" />
            </section>
            <section className="main__content">
                <div className="main__content__intro1">
                    <h1>Lời chúc tốt đẹp</h1>
                </div>
                <div className="main__content__intro2">
                    <p style={{
                        textIndent: '3em',
                        textAlign: 'justify'
                    }}>Chúc anh <span style={bold}>Trung</span> nhà ta có một ngày sinh nhật vui vẻ, âm áp và sum vầy bên gia đình và anh em. Chúc <span style={bold}>Trung</span> luôn luôn khoẻ mạnh, học giỏi và lấy được học bổng của <span style={bold}>HCMUTE</span>.
                    </p>
                    <p style={{
                        textIndent: '3em',
                        textAlign: 'justify'
                    }}>
                        Chúc anh tuổi 19 ngày càng trưởng thành hơn, đẹp trai hơn, cháy hết mình với thanh xuân, học giỏi và kiếm nhiều tiền chăm lo cho gia đình, chúc anh sớm có người yêu xinh đẹp, đảm đang.
                    </p>
                    <p style={{
                        textIndent: '3em',
                        textAlign: 'justify'
                    }}>
                        Không biết sinh nhật m năm ngoái có tặng gì không ta, nếu chưa thì chắc cái web này là món quà đầu tiên đấy, web này không những là thiệp chúc mừng sinh nhật mà còn là một phần mềm quản lí những dự định sẽ làm trong tương lai gần, nó kiểu như những ước nguyện đấy:)).
                        Hãy chọn vào phần <span style={bold}>Dự định</span> trên ở thanh điều hướng để trải nghiệm.(Hiện tại đang sửa tính năng này, chờ vài ngày nữa nhé)
                    </p>
                </div>
            </section>
        </main>
    )
}