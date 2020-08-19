import React from 'react';
import  { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import fire from "./firebase";
import   "firebase/auth";
import   "firebase/firestore";
import firebase from'firebase'
 function Deletecard(props) {
    
  const [sectionValue,setSectionvalue]=useState(props.sectionName)
  const [productValue,setProductValue]=useState(props.productName)
  
const onClose=()=>{
       const {onClose}=props
       onClose(false)
}
const handleSection=(e)=>{
  setSectionvalue(e.target.value)
  
}
const handleProduct=(e)=>{
  setProductValue(e.target.value)
 
}
const makeDelete=()=>{
    
  fire.firestore().runTransaction(function(transaction) {
      let id;
      if(sectionValue==='Medicines') {
        id='CYGAxaP7efipvyuz7K5S'
        
       
        
 } else if (sectionValue==='Mom and child') {
       id='FDSi7pW3iZLsUPJwdAUk'
       
       
      
 } else if (sectionValue==='Pain and Cramp') {
      id='NweuZY6ByIWXj44PZavw'
      
      
     
     
} else if (sectionValue==='Hygiene') {
      id='rr8HgrhBbeDqxFzBYFSF'
          
}
      let sfDocRef =fire.firestore().collection("data").doc(id)
      return transaction.get(sfDocRef).then(function(sfDoc) {
         
          console.log(sfDoc.data())
          let arr=sfDoc.data().data
          let newArray =arr.filter(item=>item.name!==productValue)
           console.log(newArray)
               transaction.update(sfDocRef, {data: newArray });
             
         
      });
    })
    const {onClose}=props
    onClose(false)
    }
  return (
    <Card >
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <TextField id="standard-basic" label="Բաժին" value={sectionValue} onCahnge={handleSection}/>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div>
            <TextField id="standard-basic" label="Աբրանք)" value={productValue} onChange={handleProduct}/>
            </div>
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={onClose} size="small" color="primary">
          cancel
        </Button>
        <Button onClick={makeDelete} size="small" color="primary">
          delete
        </Button>
      </CardActions>
    </Card>
  );
}
export default  Deletecard;