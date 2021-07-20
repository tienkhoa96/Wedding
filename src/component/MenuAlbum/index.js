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
        padding: "40px 0 60px 0",
        width: "90vw",
        margin: '0 auto'
    },
    section: {
        fontSize: "24px",
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: "bold",
    },
    boxItem: {
        width: "24%",
        padding: "5px",
        overflow: "hidden",
        // marginBottom: "20px"
        "&:hover": {
            "& .change": {
                color: "#f26a19"
            }, 
        },
        "&:hover .opacity": {
            "& > img": {
                // transform: "scale(1.3)",
                opacity: "0.7",
                transition: "all 0.5s ease-in-out",

            }
        }
    },
    boxTitle: {
        fontSize:"18px",
        margin:"0",
        paddingTop:"5px",
        fontWeight:"100",
        overflow:"hidden",
        textOverflow:"ellipsis",
        WebkitLineClamp:"1",
        display:"-webkit-box",
        WebkitBoxOient:"vertical"
    },
    boxImg: {
        position: "relative",
        padding: "5px 0",
        overflow: "hidden",
        backgroundSize: "cover",
        "& > img": {
            width: '100%',
        },
    },
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
                                            <div className={clsx(classes.boxImg, "opacity")}>
                                                <img src={item.img}/>
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


    return ( <>
                <Grid container spacing={3} className={classes.wrapMenuDetail}>
                <Grid item xs={12} className={classes.section}>Album ảnh cưới</Grid>
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