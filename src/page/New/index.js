import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  Link
} from "react-router-dom";
import Header from '../../component/common/Header'
import Footer from '../../component/common/Footer'
import clsx from  'clsx';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "60px 0"
  },  
  wrapNew: {
    // "@media (min-width: 600px": {
      display: 'flex',
    // },
    // justifyContent: "flex-start",
    alignItems: "start",
    flexWrap: "wrap",
    marginBottom: "50px",
    "@media (min-width: 1200px)": {
      width: "90vw",
      margin: '0 auto'
    }
  },
  section: {
    fontSize: "24px",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom:"30px",
  },
  inner: {
    margin: "0 auto",
    maxWidth: "100%",
    padding: "10px 20px",
    "&:hover  .changeTitle": {
      color: "#f26a19"
    }
  },
  flexItem:{
    "@media (min-width: 768px)": {
      display: "flex",
    },
    alignItems: "center",
    justifyContent: "center"
  },
  boxImg: {
    paddingRight: "20px",
    // "@media (min-width: 768px)": {
    //   width: "40%",
    //   padding: "10px 20px 10px 50px",
    // },
    "& > img": {
      width: "100%"
    }
  },
  subInner: {
    // margin: "0 auto",
    // maxWidth: "100%",
    paddingBottom: "20px",
    // boder: "1px solid gray"
    "&:hover  .changeSubTitle": {
      color: "#f26a19"
    }
  },
  flexSubItem:{
    display: "flex",
    alignItems: "center",
    // justifyContent: "center"
  },
  boxSubImg: {
    paddingRight: "5px",
    "& > img": {
      width: "95%",
      height: "80%"
    }
  },
  newTitle: {
    padding: "15px 15px",
    background: "#f26a19",
    marginBottom: "10px",
    color: "#ffffff",
    textTransform: "uppercase", 
    fontWeight: "bold"
  },
  des: {
    fontWeight: "bold",
    fontSize: "18px"
  },
  boxSubItem: {
    padding: "10px 20px"
  },
}));

export default function New() {
  const classes = useStyles();

  const ItemNew = [
    {
      id: "ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/bungnouudai.jpg?raw=true",
      des: "Kí trước online - Bùng nổ ưu đãi",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
    {
      id: "uu-dai-mua-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/4-2-1.jpg?raw=true",
      des: "Ưu đãi tưng bừng mùa cưới 2020",
      title: "Ưu đãi lớn cuối cùng năm 2021, ELLY studio không giảm giá mà tặng hẳn [...]"
    },
    {
      id: "chup-hinh-cuoi-chuan-bi-gi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/chup-anh-cuoi-phong-cach-han-quoc-2.jpg?raw=true",
      des: "Chụp hình cưới cần chuẩn bị gì",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
    {
      id: "ngay-tot-to-chuc-dam-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/vector-con-trau-20215f69c6d645996_22ebded96e18f5171f1862107b7caf24.jpg?raw=true",
      des: "Ngày tốt tổ chức đám cưới",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
    {
      id: "thiet-ke-thiep-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/thiepcuoi.jpg?raw=true",
      des: "Thiết kế thiếp cưới",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
  ]

  const SubItem = [
    {
      id: "/ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/bungnouudai.jpg?raw=true",
      des: "Kí trước online - Bùng nổ ưu đãi",
    },
    {
      id: "/ngay-tot-to-chuc-dam-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/vector-con-trau-20215f69c6d645996_22ebded96e18f5171f1862107b7caf24.jpg?raw=true",
      des: "Ngày tốt tổ chức cưới hỏi",
    },
    {
      id: "/thiet-ke-thiep-cuoi",      
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/thiepcuoi.jpg?raw=true",
      des: "Thiết kế thiệp cưới",
    },
    {
      id: "/uu-dai-mua-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/4-2-1.jpg?raw=true",
      des: "Ưu đãi tưng bừng mùa cưới",
    },
    {
      id: "/chup-hinh-cuoi-chuan-bi-gi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/chup-anh-cuoi-phong-cach-han-quoc-2.jpg?raw=true",
      des: "Chụp hình cưới cần chuẩn bị gì",
    },
  ]


  const renderItem = () => {
    return(<>
            {
              ItemNew.length && ItemNew.map((item, index) => {
                return (
                    <Grid item xs={12} className={classes.inner}>
                      <Link to={`/new-detail/${item.id}`}>
                        <Grid container item xs={12} className={classes.flexItem}>
                          <Grid item xs={12} sm={4} className={classes.boxImg}>
                            <img src={item.img}/>
                          </Grid>
                          <Grid item xs={12} sm={8} className={clsx(classes.boxTitle, "changeTitle")}>
                            <div className={classes.titleInner}>
                              <div className={classes.des}>{item.des}</div>
                              <div className={classes.title}>{item.title}</div>
                            </div>  
                          </Grid>   
                        </Grid>                         
                      </Link>
                    </Grid>
                )
              })  
            }
          </>
    )
  }

  const renderSubItem = () => {
    return(<>
            {
              SubItem.length && SubItem.map((item, index) => {
                return (<>
                    <Grid item xs={12} className={classes.subInner}>
                      
                      <Link to={`/new-detail/${item.id}`}>
                        <Grid container item xs={12} className={classes.flexSubItem}>
                          <Grid item xs={4} className={classes.boxSubImg}>
                            <img src={item.img}/>
                          </Grid>
                          <Grid item xs={8} className={clsx(classes.boxSubTitle, "changeSubTitle")}>
                            <div className={classes.subTitleInner}>
                              <div className={classes.des}>{item.des}</div>
                            </div>  
                          </Grid>   
                        </Grid>                         
                      </Link>
                    </Grid>
                    </>
                )
              })  
            }
          </>
    )
  }

  return (<>
    <Header />
    <div className={classes.content}>
    <div className={classes.section}>Tin tức </div>
      <Grid container className={classes.wrapNew}>
        <Grid container item xs={12} sm={8} className={classes.boxItem}>
          
          {
            renderItem()
          }
        </Grid>
        <Grid container item xs={12} sm={4} className={classes.boxSubItem}>
          <Grid item xs={12} className={classes.newTitle}>Bài viết mới nhất</Grid>
          {
            renderSubItem()
          }
        </Grid>
      </Grid>
    </div>
    <Footer />
    </>
  );
} 