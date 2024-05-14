
import Header from "../components/Header"
import {connect} from 'react-redux'
import { addToCart, removeToCart } from "../service/actions/action";
const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchProps=dispatch=>({
    // addToCartHandler:data=>dispatch(addToCart(data))
    removeToCart:()=>dispatch(removeToCart())
})
export default connect(mapStateToProps,mapDispatchProps)(Header);