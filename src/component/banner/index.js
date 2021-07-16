import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    banner: {
        "& > img": {
            width: "100vw",
            height: "40vw"
        },
        "@media (max-width : 768px)": {
            display: 'none',
        },
        paddingBottom: "30px"
    }
  }));

const Banner = () => {

    const classes = useStyles();

    return <div className={classes.banner} >
        <img src="https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Capture.PNG?raw=true" alt=""/>
    </div>
}

export default Banner