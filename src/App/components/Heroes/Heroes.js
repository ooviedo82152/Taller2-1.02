import React,{ Component} from 'react'
import heroeService from '../../services/heroeService'

export class Heroes extends Component {
    state = {
        Heroes:[]
    }
    componentDidMount(){
        this.setState({heroes:heroeService.getHeroes()});
    }
    render(){
        const heroes = this.state.heroes;
        return(
            <React.Fragment>
                <h1>Héroes<small>Marvel y DC</small></h1>
                <hr></hr>
                <div className = "card-columns">
                    {/*Tarjeta de los Heroes*/}
                    {heroes.map(heroe=>{
                        return(
                            <div className="card animated fadedIn fast">
                            
                        )
                    })

                    }
                </div>
        )
    }
}