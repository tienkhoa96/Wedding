import React from "react"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';


const useStyles = makeStyles((theme) => ({
    item: {
        paddingTop: "50px",
        background: "#f4f0ea",
        paddingBottom: "50px"
    },
    section: {
        fontSize:"24px",
        textTransform:"uppercase",
        textAlign:"center",
        marginBottom:"30px",
        fontWeight: "500",
        marginTop: "30px"
    },
    wrapNew: {
        display: "flex",
        justifyContent: "space-around",
        "@media (min-width: 1280px)": {
            width: "90%",
            margin: "0 auto"
        },
        marginBottom: "50px",
        padding: "0 50px"
    },
    newItem: {
        width: "30%",
        textAlign: "center", 
        padding: "20px 20px",
        "&:hover": {
            cursor: "pointer"
        },
        "&:hover .changeBtn": {
            background:"#f6cacad4",
            color:"#ffffff",
            border:"1px solid #f6cacad4",
            opacity: "1"
        }
    },
    card: {
        position:"relative",
        display:"flex",
        flexDirection:"column",
        minWidth:"0",
        wordWrap:"break-word",
        backgroundColor:"#fff",
        backgroundClip:"border-box",
        border:"1px solid rgba(0,0,0,.125)",
        borderRadius:"6px",
        "& > img": {
            width:"100%",
            borderTopLeftRadius:"6px",
            borderTopRightRadius:"6px" 
        },
    },
    cardBody: {
        flex: "1 1 auto",
        padding: "1.25rem",
        textAlign: "start"
    },
    cardTitle: {
        fontSize:"16px",
        fontWeight:"600",
        marginBottom:".75rem",
        marginTop: "0"
    },
    cardText: {
        marginBottom:"20px",
        fontSize:"14px"
    },
    btnPrimary: {
        background:"#ffffff",
        color:"#000000",
        border:"1px solid #000000",
        fontSize:"14px",
        padding: "7px 15px",
        borderRadius: "16px",
        display: "inline-block",
        opacity: "0.4"
    }
  }));

const NewHome = () => {
    
    const classes = useStyles();

    const NewHome = [
        {
            img: 'https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/new/chup%20anh%20cuoi%20can%20cbi%20nhung%20gi.jpg?raw=true',
            title: "Chụp ảnh cưới cần chuẩn bị những gì",
            subtitle: 'Chụp 1 bộ ảnh cưới và ưng ý với bộ ảnh cưới của mình là điều không khó và cũng không dễ...',
            link: "/new-detail/chup-hinh-cuoi-chuan-bi-gi"
            
        },
        {
            img: 'https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/chup-anh-cuoi-phong-cach-han-quoc-2.jpg?raw=true',
            title: "Xu hướng tổ chức tiệc cưới năm 2021",
            subtitle: 'Đám cưới là ngày trọng đại, bất cứ cặp đôi nào cũng mong muốn những điều khác biệt...',
            link: "/new-detail/thiet-ke-thiep-cuoi"
            
        },
        {
            img: 'https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/06.jpg?raw=true',
            title: "Top 6 ứng dụng thiết kế thiệp cưới 2021",
            link: "/new-detail/ki-truoc-online-bung-no-uu-dai",
            subtitle: 'Thiệp cưới từ lâu đã trở thành vật không thể thiếu trong mỗi đám cưới. Bởi tấm thiệp cưới là...',
            
        },
        {
            img: 'https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/new/xu-huong-to-chuc-tiec-cuoi-than-mat-2021-03.jpg?raw=true',
            title: "Xem tuổi lấy vợ, lấy chồng cho Bính Tý",
            subtitle: 'Nam nữ sinh năm 1996 hợp với tuổi nào. Chúng ta sẽ cùng xem vì sao nên lấy vợ/ lấy chồng hợp tuổi.',
            link: "/new-detail/ngay-tot-to-chuc-dam-cuoi"
        }
    ]
    return <div className={classes.item}>
            <div className={classes.section}>Tin tức - sự kiện</div>
            <Grid container spacing={3} className={classes.wrapNew}>
                {
                    NewHome.length && NewHome.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} className={classes.newItem}>
                                    <Link to={item.link}>
                                        <div className={classes.card}>
                                                <img src={item.img} alt=""/>
                                            <div className={classes.cardBody}>
                                                <h5 className={classes.cardTitle}>{item.title}</h5>
                                                <p className={classes.cardText}>{item.subtitle}</p>
                                                <div   className={clsx(classes.btnPrimary, "changeBtn")}>Xem thêm</div>
                                            </div>
                                        </div>
                                    </Link>
                                </Grid>
                            )
                        })
                    }
            </Grid>
    </div>
}


export default NewHome