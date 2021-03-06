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
  
  subDes: {
    fontWeight: "bold",
    fontSize: "16px"
  },
}));

export default function New() {
  const classes = useStyles();

  const ItemNew = [
    {
      id: "ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/bungnouudai.jpg?raw=true",
      des: "K?? tr?????c online - B??ng n??? ??u ????i",
      title: "ELLY STUDIO th??ng b??o ??u ????i d??nh ri??ng cho kh??ch h??ng ????ng k?? online tr?????c [...]"
    },
    {
      id: "uu-dai-mua-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/4-2-1.jpg?raw=true",
      des: "??u ????i t??ng b???ng m??a c?????i 2020",
      title: "??u ????i l???n cu???i c??ng n??m 2021, ELLY studio kh??ng gi???m gi?? m?? t???ng h???n [...]"
    },
    {
      id: "chup-hinh-cuoi-chuan-bi-gi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/chup-anh-cuoi-phong-cach-han-quoc-2.jpg?raw=true",
      des: "Ch???p h??nh c?????i c???n chu???n b??? g??",
      title: "Th???i ?????i c???a c??ng ngh??? s??? l??n ng??i, cu???c s???ng c??ng tr??? n??n khoa h???c v?? ti???n l???i h??n [...]"
    },
    {
      id: "ngay-tot-to-chuc-dam-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/vector-con-trau-20215f69c6d645996_22ebded96e18f5171f1862107b7caf24.jpg?raw=true",
      des: "Ng??y t???t t??? ch???c ????m c?????i",
      title: "Vi???c ?????t l???ch ch???p ???nh c?????i v???a kh??ng m???t c??ng di chuy???n ?????n t???n n??i [...]"
    },
    {
      id: "thiet-ke-thiep-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/thiepcuoi.jpg?raw=true",
      des: "Thi???t k??? thi???p c?????i",
      title: "AN TO??N ??? TI???N L???I ??? NHI???U ??U ????I ch??nh l?? l?? do b???n n??n ????ng k?? l???ch ch???p ngay h??m nay [...]"
    },
  ]

  const SubItem = [
    {
      id: "/ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Alibaba/11.jpg?raw=truehttps://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/ProductPrice/8.jpg?raw=true",
      des: "Th??? t???c k???t h??n m???t bao l??u",
    },
    {
      id: "/ngay-tot-to-chuc-dam-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/ProductPrice/9.jpg?raw=true",
      des: "????ng k?? k???t h??n m???t bao l??u",
    },
    {
      id: "/thiet-ke-thiep-cuoi",      
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/10.jpg?raw=true",
      des: "M???u ??o c?????i c?? d??u ?????p nh???t n??m 2021",
    },
    {
      id: "/uu-dai-mua-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/08.jpg?raw=true",
      des: "Nh???ng ??i???u c???n bi???t khi t??? ch???c ti???c c?????i",
    },
    {
      id: "/chup-hinh-cuoi-chuan-bi-gi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/09.jpg?raw=true",
      des: "Ch????ng tr??nh b???c th??m tr??ng th?????ng",
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
                              <div className={classes.subDes}>{item.des}</div>
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
    <div className={classes.section}>Tin t???c </div>
      <Grid container className={classes.wrapNew}>
        <Grid container item xs={12} sm={8} className={classes.boxItem}>
          
          {
            renderItem()
          }
        </Grid>
        <Grid container item xs={12} sm={4} className={classes.boxSubItem}>
          <Grid item xs={12} className={classes.newTitle}>B??i vi???t m???i nh???t</Grid>
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