import {makeStyles} from '@material-ui/core/styles';

const useStyle= makeStyles((theme)=>({
    container:{
        backgroundColor:theme.palette.background.paper,
        padding:theme.spacing(8,0,6)
    },
    toolbar:{
        display:"flex",
        justifyContent:"space-between"

    },
    icon:{
        marginRight:"20px"
    },
    button:{
        marginTop:"40px auto",
    },
    carrGrid:{
        padding:"20px 0"
    },
    card:{
        height:"100%",
        display:"flex",
        flexDirection:"column",
    },
    data:{
        fontSize:"18px"
    }
    ,
    cardMedia:{
        paddingTop:"56.25%" /*Aspect ratio of 16:9 */,
    },
    cardContent:{
        flexGrow:1,
        display:"flex",
        flexDirection:"column"
    }
}))
export default useStyle
