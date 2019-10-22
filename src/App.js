import React from 'react';
import Header from './includes/header';
import Footer from './includes/footer';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: 
      [
         {
            "id":1,
            "name":"Foo",
            "age":"20"
         },
         {
            "id":2,
            "name":"Bar",
            "age":"30"
         },
         {
            "id":3,
            "name":"Baz",
            "age":"40"
         }
      ]
   }
  }
  render() {
    var myStyle = {
      fontSize: 100,
      color: '#FF0000'
   }
    return (
      <div>
      <Header headerProp = "Kumar gfuhjgv"/>
      {/* <Content/> */}
      <table>
        <thed><th>Id</th><th>Name</th><th>Age</th></thed>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
      <Footer/>
   </div>
    );
 }
}

class Content extends React.Component {
  render() {
     return (
        <div>
           <h2>Content</h2>
           <p>The content text!!!</p>
        </div>
     );
  }
}
class TableRow extends React.Component {
  render() {
     return (
        <tr>
           <td>{this.props.data.id}</td>
           <td>{this.props.data.name}</td>
           <td>{this.props.data.age}</td>
        </tr>
     );
  }
}
// class Footer extends React.Component {
//   render() {
//      return (
//         <div>
//            <h2>Footer</h2>
//            <p>The contents!!!</p>
//         </div>
//      );
//   }
// }
export default App;

