import React from 'react';
class Header extends React.Component {
    render() {
       return (
        <div>
        <h1 onclick="submit()">{this.props.headerProp}</h1>
        {/* <h2>{this.props.contentProp}</h2> */}
     </div>
       );
    }
  }
  function submit(){
      alert('ihtkjh');
  }
  export default Header;