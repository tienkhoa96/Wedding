import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from  'clsx';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    
    headerTitle: {
        
        border:"1px solid #f2e0b1",
        display:"inline-block",
        fontSize:"30px",
        position:"relative",
        background:"#fff",
        marginTop:"200px",
        color:"rgb(242, 151, 144)",
        fontWeight:"bold",
        "&:before":{
            content:"url(https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/ProductPrice/before.png?raw=true)",
            position:"absolute",
            left:"-10px",
            top:"-17px"
        },
        "&:after": {
            content:"url(https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/ProductPrice/before.png?raw=true)",
            position:"absolute",
            right:"-15px",
            top:"-15px",
            transform: "rotate(185deg)"
        },
        "@media (min-width: 600px)": {
            padding:"5px 130px",
        },
        "@media (max-width: 600px)": {
            padding:"5px 50px",
        }
    },
    firstChild: {
            marginTop:"100px",
    },
    boxHeader: {
        textAlign: "center"
    },
    imgDaisy: {
        textAlign:"center",
        position:"relative",
        bottom:"-70px",
        width:"280px",
        height:"280px",
        display:"inline-block",
        borderRadius:"50%",
        // background:"#fff",
        "& > .image": {
            width:"215px",
            height:"215px",
            borderRadius:"50%",
            display:"inline-block"
        }
    },
    imgDaisyMain: {
        position:"relative",
        top:"29px",
        left:"-3px",
        objectFit:"cover"
    },
    imgDaisyBg: {
        position:"absolute",
        left:"50%",
        transform:"translateX(-50%)",
        height:"260px",
        zIndex:"99999",
        borderRadius:"unset",
        width:"260px"
    },
    contentBox: {
        border:"1px solid #00000024",
        // borderRadius:"20px",
        borderTopRightRadius:"12px",
        borderTopLeftRadius:"12px",
        textAlign: "center",
        background: "#fff",
        // border: "unset",
    },
    title: {
        fontSize:"40px",
        color:"rgb(210, 147, 101)",
        fontFamily:"'Pinyon Script', cursive",
        paddingTop:"70px",
        paddingLeft:"15px",
        paddingRight:"15px",
        fontWeight: "bold"
    },
    description: {
        fontSize:"18px",
        fontWeight:"bold",
        padding:"10px 0 ",
    },
    price: {
        fontWeight:"bold",
        fontSize:"18px",
        color:"#ea3038",
        padding:"0 0 15px 0"
    },
    label: {
        margin:"0",
        padding:"12px 0",
        position:"relative",
        borderTop:"1px solid #f0f0f0"
    },
    labelGift: {
        margin:"0",
        padding:"12px 0",
        position:"relative",
        borderTop:"1px solid #9a7b7b"
        
    },
    subContent: {
        "& > li": {
            listStyle: "none"
        },
        padding: "0",
        margin: "0"
    },
    content: {
        padding: "0 15px"
    },
    boxItem: {
        padding: "0 20px",
        textAlign: "center",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-between"
    },
    container: {
        "@media (min-width: 600px)": {
            width: "90vw",
            margin: "0 auto",
        },
        display: "flex",
        justifyContent: "center"
    },
    subGift: {
        "& > li": {
            listStyle: "none"
        },
        margin: "0",
        background: "#fedcd9d1",
        padding: "0 15px",
        borderBottomRightRadius:"12px",
        borderBottomLeftRadius:"12px",
        color: "rgb(29 29 29)"
    }, 
    giftName: {
        padding: "12px 0"
    },
    textGift: {
        marginLeft: "10px",
        fontSize: "30px",
        
    },
    imgGift: {
        display: "inline-block",
        // width: "40px",
        // height: "40px",
        "& > .fa-gift": {
            fontSize: "25px"
            
        }
    },
    group:  {
        background: "url(https://ely.com.vn/wp-content/themes/flatsome/resources/images/bg-pean.png)",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat",
        paddingBottom:"70px"
    },
}));

const ShowProductPrice = ({dataList}) => {
    
    const classes = useStyles();

    const renderSubContent = (list) => {
        return(<>
            {
                list.map((item, index) => {
                    return <li className={classes.label}>{item.label}</li>
                })
            }
            </>)
    }

    const renderSubGift = (list) => {
        return(
            <>
            {
                list.map((item, index) => {
                    return <>
                            <li className={classes.labelGift}>{item.label}</li>
                            </>
                })
            }
            </>
        )
    }

    const renderSubProduct = (list) => {
        return(
            <>
            {
                list.map((item, index) => {
                    return  <Grid item xs={12} sm={6} md={4} className={classes.boxItem}>
                                <div>
                                    <div className={classes.boxImg}>
                                        <div className={classes.imgDaisy}>
                                            <img className={clsx(classes.imgDaisyMain, 'image')} src={item.img}/>
                                            <img className={classes.imgDaisyBg} src="https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/icon/bg-daisy.png?raw=true" />
                                        </div>
                                    </div>
                                    <div className={classes.contentBox}>
                                        <div className={classes.title}>{item.title}</div>
                                        <div className={classes.description}>{item.description}</div>
                                        <div className={classes.price}>{item.price}</div>
                                        <div className={classes.content}>
                                            {
                                                item.content && item.content.length && <ul className={classes.subContent}>
                                                    {
                                                        renderSubContent(item.content)
                                                    }
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.gift}>
                                        {
                                            item.gift && item.gift.length && <ul className={clsx(classes.subGift)}>
                                                <div className={classes.giftName}>
                                                    <div className={classes.imgGift}><i class="fas fa-gift"></i></div>
                                                    <span className={classes.textGift}>Qu?? t???ng</span>
                                                </div>
                                            {
                                                renderSubGift(item.gift)
                                            }
                                            </ul>  
                                        }
                                    </div>
                                </div>
                    
                            </Grid>
                })
            }
            </>
        )
    }
    const renderProPrice = () => {
        return(
            <>
                {
                    dataList.length && dataList.map((item, index) => {
                        return (<Grid container className={ `${index % 2 === 1 ? classes.group : ""}`}>
                                    <Grid item xs={12} className={classes.groupDaisy}>
                                        <div className={classes.boxHeader}>
                                            <div className={clsx(classes.headerTitle, `${index === 0 ? classes.firstChild : ""}`)}>{item.header}</div>
                                        </div>
                                        <Grid container item className={classes.container}>
                                            {
                                                item.data && item.data.length && <>
                                                    {
                                                        renderSubProduct(item.data)
                                                    }
                                                </>
                                            }
                                        </Grid>
                                    </Grid>
                            </Grid>
                        )
                    })
                }
            </>
        )
    }


    return (
        <>
            {
                renderProPrice()
            }
        </>
    )
}

ShowProductPrice.defaultProps = {
    dataList: []
}

ShowProductPrice.propTypes = {
    dataList: PropTypes.array.isRequired,
}

export default ShowProductPrice