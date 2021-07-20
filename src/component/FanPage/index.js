import React, {useEffect, useState} from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom"
import { TextField , Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    item: {
        padding: "20px 20px",
        "@media (min-width: 1200px)": {
            padding: "20px 40px"
        }
    },
    section: {
        textTransform:"uppercase",
        fontWeight:"600",
        fontSize:"18px",
        position:"relative",
        display:"inline-block",
        paddingBottom:"5px",
        marginBottom: "18px",
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
    },
    marginBottom: {
        marginBottom:  "18px"
    },
    inputUser : {
        display: "block",
        padding: "10px 15px",
        marginBottom: "20px",
        width: "230px",
        borderRadius: "5px",
        outline: "none",
        border: "1px solid #adadad"
    }

    
  }));

const FanPage = () => {
    // const history = useHistory()
    const classes = useStyles();
    // const [loadFb, setloadFb] = useState(false)

    // useEffect(() => {
            
    //         let fb = document.getElementById('fanpage-facebook')
    //             const script = document.createElement("script");
    //             script.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v11.0";
    //             script.async = true;
    //             script.defer = true;
    //             script.crossorigin = 'anonymous';
    //             script.nonce = 'NoTKtKSG';
    //             script.id = 'fanpage-facebook';
    //             document.body.appendChild(script);
    //             setloadFb(!loadFb)
    //         return () => {
    //             if(fb) {
    //                 document.body.removeChild(fb)
    //             }
            
    //         }
    //   }, [history.location.pathname]);



    return  <Grid item xs={12} sm={6} md={4} lg={4} className={classes.item}>
            <div className={classes.section}>Liên hệ với chúng tôi</div>
                {/* <div className={classes.margin}>
                    <div id="fb-root"></div>
                        <div className="fb-page" data-href="https://www.facebook.com/techmastervn" data-tabs="timeline"
                            data-width="" data-height="240" data-small-header="false" data-adapt-container-width="true"
                            data-hide-cover="false" data-show-facepile="true">
                            <blockquote cite="https://www.facebook.com/techmastervn" className="fb-xfbml-parse-ignore"><a
                                    href="https://www.facebook.com/techmastervn">TechMaster Vietnam</a></blockquote>
                        </div>
                </div> */}

                <form>
                    <input type="text" placeholder="Họ và tên" className={classes.inputUser}/>
                    <input type="text" placeholder="Nhập Email" className={classes.inputUser}/>
                    <input type="text" placeholder="Nhập số điện thoại" className={classes.inputUser}/>
                    <Button variant="contained" color="primary">
                        Gửi đi
                    </Button>
                </form>
                {/* <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Họ và tên" variant="outlined" className={classes.marginBottom}/>
                    <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.marginBottom} />
                    <TextField id="outlined-basic" label="Số điện thoại" variant="outlined" className={classes.marginBottom} />
                    <Button variant="contained" color="primary">
                        Gửi đi
                    </Button>
                </form> */}
                
            </Grid>
}


export default FanPage