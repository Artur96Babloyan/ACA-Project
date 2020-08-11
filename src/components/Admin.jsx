import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import fire from "./firebase";
import   "firebase/auth";
import   "firebase/firestore";
import firebase from'firebase'
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const styles =((theme) => ({
      
      admin: {
       marginTop:'300px'
      },
   
    }));
function Admin (props) {
   const [sectionValue,setSectionvalue]=useState('')
   const [priceValue,setPriceValue]=useState('')
   const [productValue,setProductValue]=useState('')
   const [imgValue,setImgValue]=useState('')
  
    const logout = () => {
      fire.auth().signOut().then((cred) => {
       console.log('sign out')
      })
     }
    const handleSection=(e)=>{
      setSectionvalue(e.target.value)
      
    }
    const handleProduct=(e)=>{
      setProductValue(e.target.value)
     
    }
    
   const  handleImg=(e)=>{
  
      setImgValue(e.target.value)
    }
    const handlePrice=(e)=>{
       
      setPriceValue(e.target.value)
    }
   
    const addNewPill=()=>{
      
      let id;
             if(sectionValue==='Medicines') {
                    id='CYGAxaP7efipvyuz7K5S'
                    
             } else if (sectionValue==='Mom and child') {
                   id='FDSi7pW3iZLsUPJwdAUk'
                  
             } else if (sectionValue===' Pain and Cramp') {
                  id='NweuZY6ByIWXj44PZavw'
                 
                 
            } else if (sectionValue===' Hygiene') {
                  id='rr8HgrhBbeDqxFzBYFSF'
                      
            }
      var sfDocRef =fire.firestore().collection("data").doc(id)
      
  fire.firestore().runTransaction(function(transaction) {
      return transaction.get(sfDocRef).then(function(sfDoc) {
         
    
          var newArray = sfDoc.data().data.concat({name:productValue,img:imgValue,price:priceValue})
          
              transaction.update(sfDocRef, {data: newArray });
             
         
      });
    })
    }
    const makeChange=()=>{
    
      
      
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
                
         let newArray = arr.map(item=>item.name===productValue? item={name: productValue,price:priceValue,img:item.img}:item)
         console.log(newArray)
              transaction.update(sfDocRef, {data: newArray });
             
         
      });
    })
    }
    const makeDelete=()=>{
      
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
      
  fire.firestore().runTransaction(function(transaction) {
      return transaction.get(sfDocRef).then(function(sfDoc) {
         
            let arr=sfDoc.data().data
         let newArray =arr.filter(item=>item.name!==productValue)
          console.log(newArray)
              transaction.update(sfDocRef, {data: newArray });
             
         
      });
    })
    }
    const {classes}=props
      
            
            
            return(
                <>
                <div className={classes.admin}>
                <Link to="/"> <Button  onClick={logout} variant="contained" color="primary" style={{textDecoration: 'none' }}>
        log out
      </Button>
      </Link>
                <span>enter section</span>
                <input value={sectionValue} onChange={handleSection}/>
                </div>
                <div>
                <span>enter product name</span>
                <input value={productValue} onChange={handleProduct}/>
                </div>
                <div>
                <span>enter image url</span>
                <input placeholder='dont enter if you want to delete' value={imgValue} onChange={handleImg} />
                </div>
                <div>
                <span>enter price</span>
                <input placeholder='dont enter if you want to delete' value={priceValue} onChange={handlePrice} />
                </div>
                
                <Link to="/"><button onClick={addNewPill}>Add new medicine</button></Link>
                <Link to="/"><button onClick={makeChange}>Change details</button></Link>
                <Link to="/"><button onClick={makeDelete}>Delete product </button></Link>
             
                </>
            );
      
}
export default withStyles(styles)(Admin);