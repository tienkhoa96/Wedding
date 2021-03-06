import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


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
        margin:"30px 0",
        fontWeight: "500",

    },
    boxItem: {
        display: "flex",
        justifyContent: "center",
        "@media (min-width: 1280px)": {
            width: "80%",
        },
        padding: "20px"
    },
    wrapBox: {
        display: "flex",
        flexWrap: "wrap",
        // width: "1140px",
        // margin: "0 auto",
        justifyContent: "space-around",
        "@media (min-width: 1280px)": {
            width: "70%",
            margin: "0 auto"
        }
    },
    boxImg: {
        width:"30%",
        display:"flex",
        margin:"15px 0",
        alignItems:"center",
        justifyContent:"flex-end",
        "& > img": {
            width: "85%"
        }
    },
    boxDes: {
        width:"68%",
        display:"inline-block",
        border:"1px solid #e9cdc5",
        borderLeft:"navajowhite",
        borderRadius:"15px",
        margin:"15px 0",
        padding:"0px 15px 0 25px",
    },
    desTitle: {
        fontSize: "18px",
        fontWeight: "bold",
        margin: "10px 0 5px 0",
    },
    desSub: {
        overflow:"hidden",
        textOverflow:"ellipsis",
        WebkitLineClamp:"3",
        WebkitBoxOrient:"vertical",
        fontSize:"16px",
        textAlign:"justify",
        marginBottom:"15px",
        paddingRight:"10px",
        lineHeight: "22px",
    },
    center: {
        display: "flex",
        justifyContent: "center"
    }
    
  }));

const Endow = () => {
    
    const classes = useStyles();

    const Endow = [
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Endow/st-1.png?raw=true",
            title: "Make up",
            sub: "?????i ng?? make - up tay ngh??? cao, kh??? n??ng ???bi???n h??a??? ?????nh cao, lu??n c???p nh???t nh???ng xu h?????ng trang ??i???m m???i nh???t s??? gi??p c?? d??u tr??? n??n r???ng r??? v?? xinh ?????p."
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Endow/st-2.png?raw=true",
            title: "Nhi???p ???nh gia",
            sub: "?????i ng?? nhi???p ???nh gia s??? h???u nhi???u n??m kinh nghi???m, k??? thu???t ch???p ???nh b???c th???y, b???t kho???nh kh???c c???c t???t ch???c ch???n s??? mang ?????n nh???ng b??? ???nh ho??n m???."
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Endow/st-3.png?raw=true",
            title: "D???ch v??? ho??n h???o",
            sub: "Ch???t ???nh ri??ng bi???t, ?????c ????o. ?? k??p chu ????o, t???n t??m. Gi?? th??nh b??nh ???n, ph?? h???p. ???? ch??nh l?? ??i???u l??m n??n s??? ho??n h???o cho d???ch v??? c???a ELLY."
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Endow/st-4.png?raw=true",
            title: "Tr???i nghi???m tuy???t v???i",
            sub: "T???t c??? kh??ch h??ng ?????u h??i l??ng v??? tr???i nghi???m t???i ELLY WEDDING b???i cung c??ch ph???c v??? nhi???t t??nh, chuy??n nghi???p v?? s???n ph???m ch???t l?????ng cao."
        },
        
    ]
    return <div className={classes.item}>
            <div className={classes.section}>?????N V???I ELLY STUDIO B???N S??? ???????C NH???NG G???</div>
            <Grid container  className={classes.wrapBox}>
                    {
                        Endow.length && Endow.map((item, index) => {
                                return ( <>
                                
                                    <Grid item xs={12} sm={6} classes={{root:classes.center}}>
                                        <div  className={classes.boxItem}>
                                            <div className={classes.boxImg}> 
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div className={classes.boxDes}> 
                                                <div className={classes.desTitle}>{item.title}</div>
                                                <div className={classes.desSub}>{item.sub}</div>
                                            </div>
                                        </div>
                                    </Grid>
                                </>)
                            })
                        }
            </Grid>
    </div>
}


export default Endow