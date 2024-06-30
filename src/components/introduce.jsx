
import styles from './introduce.module.css'


export default function Introduce() {
    const bold = {
        fontWeight: 'bold'
    }

    return (
        <div
            className={styles.container}>
            <div
                className={styles.container__title}>
                <h4>Giới thiệu website</h4>
            </div>
            <div className={styles.container__introduce}>
                <p>Trang web <span style={bold}>Chúc mừng sinh nhật</span>  và phần mềm <span style={bold}>danh sách những dự định trong tương lai</span>.</p>
                <p>Trang web có sử dụng công nghệ <span style={bold}>React</span>  - là một thư viện của Javascript mã nguồn mở do công ty Meta (Facebook, Instagram,...) phát triển vào năm 2014. <span style={bold}>React</span> sinh ra nhằm khắc phục những hạn chế khi code HTML, CSS, JS hoặc PHP thuần và dễ dàng quản lí, mở rộng và triển khai web một cách nhanh chóng. Có thể tìm hiểu thêm về <span style={bold}>React</span> tại <a href="https://react.dev/">trang chủ chính thức của React</a></p>
                <p>Ngoài React ra chúng tôi còn sử dụng NodeJS để triển khai server và dùng MongoDB để lưu trữ thông tin người dùng</p>
                <p>Trên là những thông tin cơ bản về trang web của chúng tôi, hãy để đánh giá bằng cách đánh giá sao, chân thành cảm ơn bạn.</p>
            </div>
            <div className={styles.starRate}>

            </div>
        </div>
    )
}