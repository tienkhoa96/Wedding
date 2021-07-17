import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  wrapAlbumDetail: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "50px",
    width: "90vw",
    margin: "0 auto",
    "@media (min-width: 1200px)":{
      width: "60vw",
      margin: "0 auto",
    }
  },
  boxItem: {
    width: "24%",
    padding: "5px",
    marginBottom: "20px",
  },
  boxImg: {
    "& > img": {
      width: "100%",
    },
  },
  title : {
      textAlign: 'center'
  }
}));

const AlbumDetail = () => {
  const classes = useStyles();
  const [myId, setMyId] = useState("");

  useEffect(() => {
    var url = window.location.href;
    var myArr = url.split("/");
    setMyId(myArr[myArr.length - 1]);
  }, [])

  const AlbumDetail = [
    {
      cat: "chup-anh-cuoi-ba-vi", 
      title: "Ba Vì",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/01.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/02.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/03.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/04.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/05.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/06.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/07.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/08.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/09.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/10.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/11.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/12.jpg?raw=true",
      ]
    },
    {
      cat: "chup-anh-cuoi-da-nang",
      title: "Đà Nẵng",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/01.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/02.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/03.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/04.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/05.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/06.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/07.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/08.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/09.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/10.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/11.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/%C4%90%C3%A0%20N%E1%BA%B5ng/12.jpg?raw=true",
    ]
    },
    {
      cat: "chup-anh-cuoi-ha-noi",
      title: "Hà Nội",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/01.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/02.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/03.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/04.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/05.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/06.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/07.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/08.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/09.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/10.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/11.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/H%C3%A0%20N%E1%BB%99i/12.jpg?raw=true",
    ]
    },
    {
      cat: "chup-anh-cuoi-phim-truong-alibaba",
      title: "Phim trường Alibaba",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Alibaba/01.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Alibaba/02.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Alibaba/03.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Alibaba/04.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Alibaba/05.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Alibaba/06.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Alibaba/07.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Alibaba/08.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Alibaba/09.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Alibaba/10.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Alibaba/11.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Alibaba/12.jpg?raw=true",
      ]
    },
    {
      cat: "chup-anh-cuoi-phim-truong-santorini",
      title: "Phim trường Santorini",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20truong%20Santory/01.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20truong%20Santory/02.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20truong%20Santory/03.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20truong%20Santory/04.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20truong%20Santory/05.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20truong%20Santory/06.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20truong%20Santory/07.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20truong%20Santory/08.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20truong%20Santory/09.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20truong%20Santory/10.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20truong%20Santory/11.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20truong%20Santory/12.jpg?raw=true",
      ]
    },
    {
      cat: "chup-anh-cuoi-phim-truong-smile",
      title: "Phim trường Smile",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Smile/01.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Smile/02.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Smile/03.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Smile/04.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Smile/05.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Smile/06.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Smile/07.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Smile/08.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Smile/09.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Smile/10.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Smile/11.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Phim%20tr%C6%B0%E1%BB%9Dng%20Smile/12.jpg?raw=true",
      ]
    },
    {
      cat: "chup-anh-cuoi-studio",
      title: "Studio",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/01.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/02.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/03.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/04.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/05.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/06.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/07.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/08.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/09.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/10.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/11.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/12.jpg?raw=true",
      ]
    },
    {
      cat: "chup-anh-cuoi-tam-dao",
      title: "Tam Đảo",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Tam%20%C4%90%E1%BA%A3o/01.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Tam%20%C4%90%E1%BA%A3o/02.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Tam%20%C4%90%E1%BA%A3o/03.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Tam%20%C4%90%E1%BA%A3o/04.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Tam%20%C4%90%E1%BA%A3o/05.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Tam%20%C4%90%E1%BA%A3o/06.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Tam%20%C4%90%E1%BA%A3o/07.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Tam%20%C4%90%E1%BA%A3o/08.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Tam%20%C4%90%E1%BA%A3o/09.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Tam%20%C4%90%E1%BA%A3o/10.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Tam%20%C4%90%E1%BA%A3o/11.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Tam%20%C4%90%E1%BA%A3o/12.jpg?raw=true",
      ]
    },
  ];

  return (
    <>
      <Header />
        {AlbumDetail.length && AlbumDetail.map((item, index) => {
            if (item.cat === myId) {
              return (
                  <>
                    <h1 className={classes.title}>Album chụp ảnh cưới {item.title}</h1>
                    <Grid container className={classes.wrapAlbumDetail}>
                    {
                        item.dataImg.map((img, index) => {
                            return(
                                <>
                                <Grid item xs={12} sm={4} className={classes.boxItem}>
                                  <div className={classes.boxImg}>
                                      <img src={img} />
                                  </div>
                                </Grid>
                                </>
                            )
                        })
                    }
                    </Grid>
                  </>
              );
            }
          })}
      <Footer />
    </>
  );
};

export default AlbumDetail;
