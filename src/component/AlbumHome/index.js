import React from "react"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from  'clsx';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    item: {
        // background: "#f4f0ea",
        paddingBottom: "50px"
    },
    containerAlbum: {
        paddingTop: "60px",
        textAlign: "center",
        "@media (min-width: 1280px)": {
            width: "90vw",
            margin: "0 auto"
        }
    },
    section: {
        fontSize:"24px",
        textTransform:"uppercase",
        textAlign:"center",
        marginBottom:"10px",
        fontWeight: "500",

    },
    wrapBox: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        "@media (min-width: 1280px)": {
            width: "70%",
            margin: "0 auto"
        },
        "@media (max-width: 600px)": {
            width: "95%",
            margin: "0 auto"
        },
        "@media (min-width: 768px)": {
            width: "95%",
            margin: "0 auto",
            padding: "30px 40px"
        }
    },
    boxItem: {
        textAlign:"center",
        padding:"10px",
        position:"relative",
        overflow:"hidden",
        "&:hover .ok": {
                "& > img": {
                    opacity: "0.8",
                    transform: "scale(1.3)",
                    borderRadius: "25px",
                },
                
        },
        "&:hover .change": {
                background: "#f6cfcac9",
                transition: "0.3s", 
        }

    },
    boxImg: {
        borderRadius:"12px",
        overflow:"hidden",
        "& > img": {
            borderRadius:"12px",
            width: "100%",
            transform: "scale(1)",
            transition: "all 1.3s ease-in-out",
        },
        // "&:hover > img": {
        //     opacity: "0.8",
        //     transform: "scale(1.3)",
        //     borderRadius: "25px",
        // } 
    },
    boxTitle: {
        display:"inline-block",
        padding:"15px 25px",
        fontSize:"16px",
        fontWeight:"700",
        background:"#ffffff9a",
        borderRadius:"10px",
        position:"absolute",
        left:"50%",
        bottom:"40px",
        transform:"translateX(-50%)",
        zIndex:"1000",
        whiteSpace:"nowrap",
    },
    btnMore: {
        padding: "10px 40px",
        border: "1px solid #9b9b9b",
        borderRadius: "25px",
        background: "#ffffff",
        display: "inline-block",
        fontWeight: 700,
        transition: "0.3s",
        marginTop: "20px",
        opacity: 0.4,
        "&:hover a": {
            color: "#ffffff",
            opacity: "1",   
        },
        "&:hover": {
            color: "#ffffff",
            opacity: 1,
            background: "#f6cacad4",
            border: "1px solid #f6cacad4"
        }
    }

  }));

const AlbumHome = () => {
    
    const classes = useStyles();

    const AlbumHome = [
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Studio/home-studio.jpg?raw=true",
            title: "Album studio",
            link: "/album-detail/chup-anh-cuoi-studio"
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Album/DaNang.jpg?raw=true",
            title: "Album Đà Nẵng",
            link: "/album-detail/chup-anh-cuoi-da-nang"
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Album/HaNoi.jpg?raw=true",
            title: "Album Hà Nội",
            link: "/album-detail/chup-anh-cuoi-ha-noi"
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Album/Santory.jpg?raw=true",
            title: "Album phim trường Santory",
            link: "/album-detail/chup-anh-cuoi-phim-truong-santorini"
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Album/Tam-%C4%91%E1%BA%A3o-8.jpg?raw=true",
            title: "Album Tam Đảo",
            link: "/album-detail/chup-anh-cuoi-tam-dao"
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Album/cherry-studio-alibaba-1-23.jpg?raw=true",
            title: "Album phim trường Alibaba",
            link: "/album-detail/chup-anh-cuoi-phim-truong-alibaba"
        },
        
    ]
    return (<div className={classes.item}>
                <div className={classes.containerAlbum}>
                    <div className={classes.section}>Album ảnh cưới</div>
                    <Grid container spacing={3} className={classes.wrapBox}>
                        {
                            AlbumHome.length && AlbumHome.map((item, index) => {
                                return ( <>
                                    <Grid item xs={12} sm={6} md={4} className={classes.boxItem}>
                                <Link to={item.link}>

                                            <div className={clsx(classes.boxImg, 'ok')}> 
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div className={clsx(classes.boxTitle, 'change')}> 
                                                {item.title}
                                            </div>
                                    </Link>

                                        </Grid>
                                </>)
                            })
                        }
                    </Grid>
                    <Link to="/album"><div className={classes.btnMore}>Xem thêm</div></Link>
                </div>
            </div>)
}


export default AlbumHome


  