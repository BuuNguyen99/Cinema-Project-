
import React, { Component } from 'react';
import './Promotion.css'
class Promotion extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>TIN KHUYẾN MÃI</h2>
                </div>
                <div className="row">
                    <div className="col-3 imageItem">
                        <img src="../image/300x450_1570766652733.jpg" alt="anh km1" />
                    </div>
                    <div className="col-3 imageItem">
                        <img src="../image/300x450_1575874237175.jpg" alt="anh km2" />
                    </div>
                    <div className="col-3 imageItem">
                        <img src="../image/300x450_1580440145245.jpg" alt="anh km3" />
                    </div>
                    <div className="col-3 imageItem">
                        <img src="../image/300x450_1582773542863.jpg" alt="anh km4" />
                    </div>
                </div>
                <div className="row">
                    <h2>GALAXY CINEMA</h2>
                </div>
                <div className="row">
                    <p><b> Galaxy Cinema</b> là một trong những công ty tư nhân đầu tiên về điện ảnh được thành lập từ năm 2003,
                        đã khẳng định thương hiệu là 1 trong 10 địa điểm vui chơi giải trí được yêu thích nhất.
                        <i>Ngoài hệ thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt người đến xem,
                        Galaxy Cinema còn hấp dẫn khán giả bởi không khí thân thiện cũng như chất lượng dịch vụ hàng đầu.</i>
                        Đến website galaxycine.vn, quý khách sẽ được cập nhật nhanh chóng các phim hay nhất phim mới nhất đang chiếu hoặc sắp chiếu.
                    </p>
                    <p>
                        Chỉ trong vài phút, quý khách sẽ nhận được tin nhắn và email phản hồi Đặt vé thành công của Galaxy Cinema.
                        <i>Quý khách có thể dùng tin nhắn lấy vé tại quầy vé của Galaxy Cinema hoặc quét mã QR để một bước
                        vào rạp mà không cần tốn thêm bất kỳ công đoạn nào nữa.
                        Nếu bạn đã chọn được phim hay để xem, hãy đặt vé cực nhanh bằng box Mua Vé Nhanh ngay từ Trang Chủ.</i>
                 </p>
                    <p>
                        Galaxy Cinema luôn có những chương trình khuyến mãi, ưu đãi, quà tặng vô cùng hấp dẫn như giảm giá vé,
                        tặng vé xem phim miễn phí, tặng Combo, tặng quà phim…  dành cho quý khách.
                        Trang web galaxycine.vn còn có mục Góc Điện Ảnh - sở hữu lượng dữ liệu về phim, diễn viên và đạo diễn,
                        giúp quý khách dễ dàng chọn được phim mình yêu thích và nâng cao kiến thức về điện ảnh của bản thân. Ngoài ra,
                        vào mỗi tháng, Galaxy Cinema cũng giới thiệu các phim sắp chiếu hot nhất trong mục Phim Hay Tháng để quý khách sớm có sự tính toán.
                    </p>
                </div>
            </div>
        );
    }
}

export default Promotion;