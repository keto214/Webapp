import React from 'react';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/action';
import "./a.css";



class Humberger extends React.Component {
     render() {
          const isDisplay = this.props.isDisplayHumberger;
          return (
               <div>
                    <div className={isDisplay===1?"humberger__menu__overlay active":'humberger__menu__overlay'} onClick={this.props.onToggleHumberger}></div>
                    <div className={isDisplay===1?'humberger__menu__wrapper show__humberger__menu__wrapper':'humberger__menu__wrapper '}>
                         <div className="humberger__menu__logo">
                              <img alt='avatar' src='https://gcdn.pbrd.co/images/gfPOSrYU2F6h.png' />
                              <div><br/>
                              <a >
                              <h2 class="word">Make by T.Cry Team</h2> <br/><br/>
                              <h2 class="word">Nguyễn Văn Châu - 4501104024</h2><br/>
                              <h2 class="word">Hồ Sỹ Chiến - 4501104027</h2><br/>
                              <h2 class="word">Nguyễn Minh Hiếu - 4501104083</h2><br/>
                              <h2 class="word">Lương Hoàng Quân - 4501104192</h2><br/>
                              </a>a
               </div>
                         </div>
                         <nav className="humberger__menu__nav mobile-menu">
                         </nav>
                    </div>
               </div>
          );
     }
}

const mapStateToProps = state => {
	return {
		isDisplayHumberger: state.isDisplayHumberger,
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
          onToggleHumberger: () => {
               dispatch(action.isDisplayHumberger())
          }
	}
}

export default connect(mapStateToProps,mapDispatchToProps) (Humberger);