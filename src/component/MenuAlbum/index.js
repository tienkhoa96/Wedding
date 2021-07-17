import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
// import { saveToLocal } from '../../utils';
// import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    wrapMenuDetail: {
        display: 'flex',
        // justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: "50px",
        width: "90vw",
        margin: '0 auto'
    },
    section: {
        padding:"20px 0",
        fontSize: "24px",
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: "bold",
    },
    boxItem: {
        width: "24%",
        padding: "5px",
        // marginBottom: "20px"
        "&:hover": {
            "& .display":{
                top: "-5px",
            },
            "& .change": {
                color: "#f26a19"
            }
        }
    },
    boxTitle: {
        fontSize:"18px",
        margin:"0",
        paddingTop:"15px",
        fontWeight:"100",
        overflow:"hidden",
        textOverflow:"ellipsis",
        WebkitLineClamp:"1",
        display:"-webkit-box",
        WebkitBoxOient:"vertical"
    },
    boxImg: {
        position: "relative",
        height: "auto",
        overflow: "hidden",
        // paddingTop: "100%",
        // backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        "& > img": {
            width: '100%'
        },
    },
    hoverImg: {
        width: "100%",
        height: "100%",
        outline: "1px solid #fff",
        outlineOffset: "-10px",
        // display: "none",
        position: "absolute",
        top: "-100%",
        left: "0px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#e0702e",
        background: "rgb(170 170 170 / 55%)",
        fontSize: "32px",
        transition: "all 1s ease-in-out"

    }
  }));


const MenuAlbum = ({dataList}) => {

    // let history = useHistory();

    const classes = useStyles();

    // const handClick = (item) => {
    //     saveToLocal("detail-album", item)
    //     history.push("/album-detail")
    // }

    
    const renderMenuAlbum = () => {
        return  (<>
                        {
                            dataList.length && dataList.map((item, index) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.boxItem}>
                                        {/* <div onClick={() => handClick(item)}> */}
                                        <Link to={`/album-detail/${item.id}`}>
                                            <div className={classes.boxImg}>
                                                <img src={item.img}/>
                                                <div className={clsx(classes.hoverImg, "display")}>Xem thêm</div>
                                            </div>
                                            <div className={clsx(classes.boxTitle, "change")}>{item.title}</div>
                                        </Link>
                                        {/* </div> */}
                                    </Grid>
                                )
                            })
                        }
                    
                </>)
    }


    return ( <><div className={classes.section}>Album ảnh cưới</div>
                <Grid container spacing={3} className={classes.wrapMenuDetail}>
                    {
                        renderMenuAlbum()
                    }
                </Grid>
            </>
    )
}

MenuAlbum.defaultProps = {
    dataList: []
}

MenuAlbum.propTypes = {
    dataList: PropTypes.array.isRequired,
}


export default MenuAlbum