
import Home from "../components/Home"
import {connect} from 'react-redux'
import { addToCart } from "../service/actions/action";
const mapStateToProps=state=>({
    data:state
})
const mapDispatchProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})
export default connect(mapStateToProps,mapDispatchProps)(Home);