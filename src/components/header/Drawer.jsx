import React, { useState, useEffect, useReducer } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';


function reducer(state, action) {
  switch (action.type) {
    case 'check':
      return {...state, [action.value]: !state[action.value]};
    case 'init':
      return {...state, ...action.initialState};
    default: state
  }
}


import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  clear: {
    marginLeft: 35,
    marginTop: 20,
    marginBottom: '15px !important'
  }
});

function HeaderDrawer(props) {

  const classes = useStyles();
  const { open, setDrawer, products, setGlobalProps } = props;
  const [drawer, hanlerDrawer] = useState(false);
  const [swich, hanlerSwich] = useState(false);
  const [prodType, handlerProductsType] = useState([]);
  const [initialState, setInitialState] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState) 

  useEffect(() => {
    dispatch({type: 'init', initialState})
  }, [Object.keys(initialState).length])

  useEffect(() => {
    hanlerDrawer(open)
  }, [open])

  useEffect(() => {
    const productsType = [];  
    products.forEach(el => {
      let match = productsType.find(element => element === el.type);
      if(!match){
        productsType.push(el.type)
      }
    });
    const initState = {};
    productsType.map(el => {
      initState[el] = false;
    })
    setInitialState(initState)
    handlerProductsType(productsType) 
  }, [products])

  const closeDrawer = () => {
    setDrawer()
    hanlerDrawer(false)
  }
  
  useEffect(() => { //take swich props
    setGlobalProps('swich', swich)
  }, [swich])

  const setCheck = (e) => {
    let value = e.currentTarget.id;
    dispatch({type: 'check', value})//set check type products
  }
  const clearAll = () => {//clear all selected products
    dispatch({type: 'init', initialState})
    hanlerSwich(false)
  }
  useEffect(() => { //take selectedProducts props
    if(Object.keys(state).length){
      let value = [];
      for(let i in state) {
        if(state[i]){
          value.push(i)
        }
      }
      setGlobalProps('selectedProduct', value)
    }
  }, [state])

  const sideList = () => (
    <div
        className={classes.list}
    >
      <List>
        {prodType.map(type => (
          <ListItem button key={type} id={type} onClick={(e) => setCheck(e)} className={state[type] ? 'checkTypeProduct': ''}>
              <ListItemText primary={type} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <FormControlLabel
        control={<Switch checked={swich} onChange={() => hanlerSwich(!swich)} />}
        label="Favorite"
        className="drawerSwich"
      />

      <Button variant="contained" color="primary" className={classes.clear} onClick={() => clearAll()}>Remove selected</Button>
    
    </div>
  );

  return (
    <div>
      <Drawer open={drawer} onClose={()=> closeDrawer()}>
        {sideList()}
      </Drawer>
    </div>
  );
}


const mapStateToProps = (state) => ({
  products: state.home.products
})

export default connect(mapStateToProps)(HeaderDrawer)