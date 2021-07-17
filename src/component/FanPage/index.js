import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    item: {
        paddingRight: "40px"
    },
    section: {
        textTransform:"uppercase",
        fontWeight:"600",
        fontSize:"18px",
        position:"relative",
        display:"inline-block",
        paddingBottom:"5px",
        "&:after": {
            content:"\"\"",
            width:"40px",
            height:"3px",
            background:"#f1ded0",
            position:"absolute",
            bottom:"0",
            left:"0"
        }
    },
    boxItem: {
        padding: "0",
        '& > li':{
            listStyle: "none",
        }
    },
    itemTitle: {
        justifyContent:"center",
        position:"relative",
        paddingLeft:"25px",
        margin:"20px 0",
        
    },
    margin: {
        margin: "16px 0",
        width: "100%",
        textAlign: "center"
    }
    
  }));

const FanPage = () => {
    const history = useHistory()
    const classes = useStyles();
    const [loadFb, setloadFb] = useState(false)

    useEffect(() => {
            
            let fb = document.getElementById('fanpage-facebook')
                const script = document.createElement("script");
                script.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v11.0";
                script.async = true;
                script.defer = true;
                script.crossorigin = 'anonymous';
                script.nonce = 'NoTKtKSG';
                script.id = 'fanpage-facebook';
                document.body.appendChild(script);
                setloadFb(!loadFb)
            return () => {
                if(fb) {
                    document.body.removeChild(fb)
                }
            
            }
      }, [history.location.pathname]);



    return  <Grid item xs={12} sm={6} md={4} lg={3} className="boxItem">
            <div className={classes.section}>Fanpage</div>
                <div className={classes.margin}>
                    <div id="fb-root"></div>
                        <div className="fb-page" data-href="https://www.facebook.com/techmastervn" data-tabs="timeline"
                            data-width="" data-height="240" data-small-header="false" data-adapt-container-width="true"
                            data-hide-cover="false" data-show-facepile="true">
                            <blockquote cite="https://www.facebook.com/techmastervn" className="fb-xfbml-parse-ignore"><a
                                    href="https://www.facebook.com/techmastervn">TechMaster Vietnam</a></blockquote>
                        </div>
                </div>
            </Grid>
}


export default FanPage