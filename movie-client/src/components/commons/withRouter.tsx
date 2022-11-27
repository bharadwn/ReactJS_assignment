 import { Component, ComponentType } from 'react';
//  import { Component, ComponentType } from 'react';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';

// export type WithRouterProps = {
//     location: ReturnType<typeof useLocation>;
//     params: Record<string, string>;
//     navigate: ReturnType<typeof useNavigate>;
// }

// const withRouter = <P extends WithRouterProps>(WrappedComponent : ComponentType<P>) => {
//     return class WrapperComponent extends Component {

//         ComponentWithRouterProp() {
//             let location = useLocation();
//             let navigate = useNavigate();
//             let params = useParams();            
//           }
        
//           render() {
//             return  <WrappedComponent
//                         {...props}
//                         location={location}
//                         params={params}
//                         navigate={navigate}
//                     />;
//          }
//         //   return ComponentWithRouterProp;
//     }
// }
 
// export default withRouter;




// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return (
//       <Component
//         {...props}
//         location={location}
//         params={params}
//         navigate={navigate}
//       />
//     );
//   }

//   return ComponentWithRouterProp;
// }

// export default withRouter;