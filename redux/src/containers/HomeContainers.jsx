
import Home from "../components/Home"
import {connect} from 'react-redux'
import { addToCart, removeToCart } from "../service/actions/action";
const mapStateToProps=state=>({
     data:state.removeItems
})
const mapDispatchProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:()=>dispatch(removeToCart())
})
export default connect(mapStateToProps,mapDispatchProps)(Home);