import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export function TableBox({ data }) {
    const styles={
        fontWeight:data.id==0 ? 'normal':'bold',
    }
    const styles1={
        fontWeight:data.id==2? 'bold':'normal',
        opacity: data.id==0 ? 0.4:'null',      // opacity: data.id==2 ? 'null':0.4,
}
    const styles2={
        opacity: data.id==0 ? 0.4:'null',
 }
 const styles3={
    opacity: data.id==2 ? 'null':0.4,
}
 
return (
      <Card className="col-1">
            <CardContent>
           <div className="head-price">
                <h4 className="head">{data.heading}</h4>
                <h1>{data.price}</h1>
            </div>
            <hr />
            <div className="content">
                <p className="data-content" style={styles}>{data?<CheckIcon /> :<ClearIcon />}{data.user}</p> 
                <p className="data-content">{data?<CheckIcon />:<ClearIcon />}{data.storage}</p>
                <p className="data-content">{data?<CheckIcon />:<ClearIcon />}{data.public}</p>
                <p className="data-content">{data?<CheckIcon />:<ClearIcon />}{data.community}</p>
                <p  className="data-content" style = {styles2}>{data.id=== 0?<ClearIcon />:<CheckIcon />}{data.private}</p>
                <p className="data-content"  style = {styles2}>{data.id=== 0?<ClearIcon />:<CheckIcon />}{data.support}</p>
                <p className="data-content" style={styles1}>{data.id=== 0?<ClearIcon />:<CheckIcon />}{data.subdomain}</p>
                <p className="data-content" style={styles3}>{data.id===2?<CheckIcon />:<ClearIcon />}{data.Status}</p>
                <CardActions>
                <Button className="btn" variant="contained">BUTTON</Button>
                </CardActions>
            </div>
            </CardContent>
        </Card>
    );
}
