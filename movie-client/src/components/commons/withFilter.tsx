import  { Component, ComponentType } from 'react';
import { Subtract } from 'utility-types';

type Props<IMovie> = {
    items: IMovie[]
};

type State<IMovie> = {
    filterKey: string,
    filteredItems: IMovie[] | null |undefined
};

export type InjectedComponentProps<IMovie> = Props<IMovie> & State<IMovie> & {
    filter: ( filterKey : string ) => void
};

const withFilter = <P extends InjectedComponentProps<IMovie>, IMovie>( WrappedComponent : ComponentType<P>, itemKey : string ) => {    
    return class WrapperComponent extends Component<Props<IMovie> & Subtract<P, InjectedComponentProps<IMovie>>, any> {        
        state = {
            filterKey: '',
            filteredItems: this.props.items
        };

        filter = ( filterKey : string ) => {
            this.props.items &&
            this.setState({
                filterKey,
                filteredItems: this.props.items.filter( ( item : any ) => item[itemKey].toUpperCase().includes( filterKey.toUpperCase() ) )
            });
        }

        render() {
            return  <WrappedComponent
                        {...this.state}
                        {...this.props as P}
                        filter={this.filter}
                    />;
        }
    }
}

export default withFilter;