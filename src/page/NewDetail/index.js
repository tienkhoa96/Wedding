import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
const useStyles = makeStyles((theme) => ({
  wrapNewDetail: {
    marginBottom: "50px",
    width: "90vw",
    margin: "0 auto",
    "& > img": {
        width: "50%"
    }
  },
  des : {
      textAlign: 'start'
  },
  title: {
    lineHeight: "2",
    letterSpacing: "0.5px",
  }
}));

const NewDetail = () => {
  const classes = useStyles();
  const [myId, setMyId] = useState("");

  useEffect(() => {
    var url = window.location.href;
    var myArr = url.split("/");
    setMyId(myArr[myArr.length - 1]);
  }, [])

  const NewDetail = [
    {
      cat: "ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/bungnouudai.jpg?raw=true",
      des: "Kí trước online - Bùng nổ ưu đãi",
      title: "Theo kinh nghiệm của Ely Wedding, bạn nên chụp ảnh cưới trước đám cưới của mình ít nhất 2 tháng. Bởi ngoài việc chụp ảnh cưới bạn còn biết bao nhiêu công việc, vấn đề cần phải giải quyết trước khi ngày chung đôi diễn ra. Bên cạnh đó, chụp ảnh cưới sớm sẽ khiến bạn chủ động và có thời gian để giải quyết một vài rắc rối trong những trường hợp xấu không may xảy ra như: màu ảnh, market, bố cục,… chưa ưng ý. Thêm vào đó, vấn đề thời tiết cũng là điều mà bạn nên lưu tâm. Nếu bạn đang mơ ước có một album ảnh cưới được thực hiện ngoại cảnh hãy nhớ đừng nên chọn mùa mưa bão. Còn nếu bạn chụp phim trường thì đơn giản và thoải mái hơn. Mặc dù vậy, chúng tôi nhận thấy rằng: Chụp ở đâu cũng không quan trọng bằng việc trời có mát và đẹp hay không? Bởi nếu chẳng may mưa, đi lại sẽ rất khó khăn, dễ bị trôi lớp makeup xinh đẹp của bạn. Ngoài ra, chụp ảnh cưới cũng cần phải chọn ngày phù hợp. Bạn có thể chọn vào khoảng thời gian rảnh rỗi của mình cũng như nửa kia của bạn để thoải mái thực hiện bộ ảnh cưới của mình. Thêm một lưu ý nhỏ dành cho bạn là tuyệt đối không nên đi chụp hình vào thứ 7 hay chủ nhật. Nhiều cô dâu – chú rể có ý nghĩ rằng: Đi chụp cuối tuần sẽ dư giả thời gian và thoải mái hơn. Tuy nhiên, đây là suy nghĩ hoàn toàn sai lầm. Thời điểm thứ 7 và chủ nhật là những ngày mà các studio chụp ảnh cưới thường đông khách, rất nhiều cặp đôi do không sắp xếp được công việc và thời gian mới phải chụp ảnh cưới vào ngày này. Ngoài ra, thứ 7 và chủ nhật cũng là thời điểm các phim trường sẽ rất đông so với những ngày khác trong tuần. Nếu bạn không muốn chen chúc, chờ đợi cảnh chụp thì hãy cố gắng sắp xếp thời gian trong tuần nhé."
    },
    {
      cat: "uu-dai-mua-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/4-2-1.jpg?raw=true",
      des: "Ưu đãi tưng bừng mùa cưới 2020",
      title: "Theo kinh nghiệm của Ely Wedding, bạn nên chụp ảnh cưới trước đám cưới của mình ít nhất 2 tháng. Bởi ngoài việc chụp ảnh cưới bạn còn biết bao nhiêu công việc, vấn đề cần phải giải quyết trước khi ngày chung đôi diễn ra. Bên cạnh đó, chụp ảnh cưới sớm sẽ khiến bạn chủ động và có thời gian để giải quyết một vài rắc rối trong những trường hợp xấu không may xảy ra như: màu ảnh, market, bố cục,… chưa ưng ý. Thêm vào đó, vấn đề thời tiết cũng là điều mà bạn nên lưu tâm. Nếu bạn đang mơ ước có một album ảnh cưới được thực hiện ngoại cảnh hãy nhớ đừng nên chọn mùa mưa bão. Còn nếu bạn chụp phim trường thì đơn giản và thoải mái hơn. Mặc dù vậy, chúng tôi nhận thấy rằng: Chụp ở đâu cũng không quan trọng bằng việc trời có mát và đẹp hay không? Bởi nếu chẳng may mưa, đi lại sẽ rất khó khăn, dễ bị trôi lớp makeup xinh đẹp của bạn. Ngoài ra, chụp ảnh cưới cũng cần phải chọn ngày phù hợp. Bạn có thể chọn vào khoảng thời gian rảnh rỗi của mình cũng như nửa kia của bạn để thoải mái thực hiện bộ ảnh cưới của mình. Thêm một lưu ý nhỏ dành cho bạn là tuyệt đối không nên đi chụp hình vào thứ 7 hay chủ nhật. Nhiều cô dâu – chú rể có ý nghĩ rằng: Đi chụp cuối tuần sẽ dư giả thời gian và thoải mái hơn. Tuy nhiên, đây là suy nghĩ hoàn toàn sai lầm. Thời điểm thứ 7 và chủ nhật là những ngày mà các studio chụp ảnh cưới thường đông khách, rất nhiều cặp đôi do không sắp xếp được công việc và thời gian mới phải chụp ảnh cưới vào ngày này. Ngoài ra, thứ 7 và chủ nhật cũng là thời điểm các phim trường sẽ rất đông so với những ngày khác trong tuần. Nếu bạn không muốn chen chúc, chờ đợi cảnh chụp thì hãy cố gắng sắp xếp thời gian trong tuần nhé."
      
    },
    {
      cat: "chup-hinh-cuoi-chuan-bi-gi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/chup-anh-cuoi-phong-cach-han-quoc-2.jpg?raw=true",
      des: "Chụp hình cưới cần chuẩn bị gì",
      title: "Theo kinh nghiệm của Ely Wedding, bạn nên chụp ảnh cưới trước đám cưới của mình ít nhất 2 tháng. Bởi ngoài việc chụp ảnh cưới bạn còn biết bao nhiêu công việc, vấn đề cần phải giải quyết trước khi ngày chung đôi diễn ra. Bên cạnh đó, chụp ảnh cưới sớm sẽ khiến bạn chủ động và có thời gian để giải quyết một vài rắc rối trong những trường hợp xấu không may xảy ra như: màu ảnh, market, bố cục,… chưa ưng ý. Thêm vào đó, vấn đề thời tiết cũng là điều mà bạn nên lưu tâm. Nếu bạn đang mơ ước có một album ảnh cưới được thực hiện ngoại cảnh hãy nhớ đừng nên chọn mùa mưa bão. Còn nếu bạn chụp phim trường thì đơn giản và thoải mái hơn. Mặc dù vậy, chúng tôi nhận thấy rằng: Chụp ở đâu cũng không quan trọng bằng việc trời có mát và đẹp hay không? Bởi nếu chẳng may mưa, đi lại sẽ rất khó khăn, dễ bị trôi lớp makeup xinh đẹp của bạn. Ngoài ra, chụp ảnh cưới cũng cần phải chọn ngày phù hợp. Bạn có thể chọn vào khoảng thời gian rảnh rỗi của mình cũng như nửa kia của bạn để thoải mái thực hiện bộ ảnh cưới của mình. Thêm một lưu ý nhỏ dành cho bạn là tuyệt đối không nên đi chụp hình vào thứ 7 hay chủ nhật. Nhiều cô dâu – chú rể có ý nghĩ rằng: Đi chụp cuối tuần sẽ dư giả thời gian và thoải mái hơn. Tuy nhiên, đây là suy nghĩ hoàn toàn sai lầm. Thời điểm thứ 7 và chủ nhật là những ngày mà các studio chụp ảnh cưới thường đông khách, rất nhiều cặp đôi do không sắp xếp được công việc và thời gian mới phải chụp ảnh cưới vào ngày này. Ngoài ra, thứ 7 và chủ nhật cũng là thời điểm các phim trường sẽ rất đông so với những ngày khác trong tuần. Nếu bạn không muốn chen chúc, chờ đợi cảnh chụp thì hãy cố gắng sắp xếp thời gian trong tuần nhé."
      
    },
    {
      cat: "ngay-tot-to-chuc-dam-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/vector-con-trau-20215f69c6d645996_22ebded96e18f5171f1862107b7caf24.jpg?raw=true",
      des: "Ngày tốt tổ chức đám cưới",
      title: "Theo kinh nghiệm của Ely Wedding, bạn nên chụp ảnh cưới trước đám cưới của mình ít nhất 2 tháng. Bởi ngoài việc chụp ảnh cưới bạn còn biết bao nhiêu công việc, vấn đề cần phải giải quyết trước khi ngày chung đôi diễn ra. Bên cạnh đó, chụp ảnh cưới sớm sẽ khiến bạn chủ động và có thời gian để giải quyết một vài rắc rối trong những trường hợp xấu không may xảy ra như: màu ảnh, market, bố cục,… chưa ưng ý. Thêm vào đó, vấn đề thời tiết cũng là điều mà bạn nên lưu tâm. Nếu bạn đang mơ ước có một album ảnh cưới được thực hiện ngoại cảnh hãy nhớ đừng nên chọn mùa mưa bão. Còn nếu bạn chụp phim trường thì đơn giản và thoải mái hơn. Mặc dù vậy, chúng tôi nhận thấy rằng: Chụp ở đâu cũng không quan trọng bằng việc trời có mát và đẹp hay không? Bởi nếu chẳng may mưa, đi lại sẽ rất khó khăn, dễ bị trôi lớp makeup xinh đẹp của bạn. Ngoài ra, chụp ảnh cưới cũng cần phải chọn ngày phù hợp. Bạn có thể chọn vào khoảng thời gian rảnh rỗi của mình cũng như nửa kia của bạn để thoải mái thực hiện bộ ảnh cưới của mình. Thêm một lưu ý nhỏ dành cho bạn là tuyệt đối không nên đi chụp hình vào thứ 7 hay chủ nhật. Nhiều cô dâu – chú rể có ý nghĩ rằng: Đi chụp cuối tuần sẽ dư giả thời gian và thoải mái hơn. Tuy nhiên, đây là suy nghĩ hoàn toàn sai lầm. Thời điểm thứ 7 và chủ nhật là những ngày mà các studio chụp ảnh cưới thường đông khách, rất nhiều cặp đôi do không sắp xếp được công việc và thời gian mới phải chụp ảnh cưới vào ngày này. Ngoài ra, thứ 7 và chủ nhật cũng là thời điểm các phim trường sẽ rất đông so với những ngày khác trong tuần. Nếu bạn không muốn chen chúc, chờ đợi cảnh chụp thì hãy cố gắng sắp xếp thời gian trong tuần nhé."
      
    },
    {
      cat: "thiet-ke-thiep-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/thiepcuoi.jpg?raw=true",
      des: "Thiết kế thiếp cưới",
      title: "Theo kinh nghiệm của Ely Wedding, bạn nên chụp ảnh cưới trước đám cưới của mình ít nhất 2 tháng. Bởi ngoài việc chụp ảnh cưới bạn còn biết bao nhiêu công việc, vấn đề cần phải giải quyết trước khi ngày chung đôi diễn ra. Bên cạnh đó, chụp ảnh cưới sớm sẽ khiến bạn chủ động và có thời gian để giải quyết một vài rắc rối trong những trường hợp xấu không may xảy ra như: màu ảnh, market, bố cục,… chưa ưng ý. Thêm vào đó, vấn đề thời tiết cũng là điều mà bạn nên lưu tâm. Nếu bạn đang mơ ước có một album ảnh cưới được thực hiện ngoại cảnh hãy nhớ đừng nên chọn mùa mưa bão. Còn nếu bạn chụp phim trường thì đơn giản và thoải mái hơn. Mặc dù vậy, chúng tôi nhận thấy rằng: Chụp ở đâu cũng không quan trọng bằng việc trời có mát và đẹp hay không? Bởi nếu chẳng may mưa, đi lại sẽ rất khó khăn, dễ bị trôi lớp makeup xinh đẹp của bạn. Ngoài ra, chụp ảnh cưới cũng cần phải chọn ngày phù hợp. Bạn có thể chọn vào khoảng thời gian rảnh rỗi của mình cũng như nửa kia của bạn để thoải mái thực hiện bộ ảnh cưới của mình. Thêm một lưu ý nhỏ dành cho bạn là tuyệt đối không nên đi chụp hình vào thứ 7 hay chủ nhật. Nhiều cô dâu – chú rể có ý nghĩ rằng: Đi chụp cuối tuần sẽ dư giả thời gian và thoải mái hơn. Tuy nhiên, đây là suy nghĩ hoàn toàn sai lầm. Thời điểm thứ 7 và chủ nhật là những ngày mà các studio chụp ảnh cưới thường đông khách, rất nhiều cặp đôi do không sắp xếp được công việc và thời gian mới phải chụp ảnh cưới vào ngày này. Ngoài ra, thứ 7 và chủ nhật cũng là thời điểm các phim trường sẽ rất đông so với những ngày khác trong tuần. Nếu bạn không muốn chen chúc, chờ đợi cảnh chụp thì hãy cố gắng sắp xếp thời gian trong tuần nhé."
      
    },
  ]

  
  return (
    <>
      <Header />
        {NewDetail.length && NewDetail.map((item, index) => {
            if (item.cat === myId) {
              return (
                  <>
                    <div className={classes.wrapNewDetail}>   
                    <h1 className={classes.des}>{item.des}</h1>
                    <img src={item.img}/>
                    <p className={classes.title}>{item.title}</p>
                    
                    </div>
                  </>
              );
            }
          })}
      <Footer />
    </>
  );
};

export default NewDetail;
