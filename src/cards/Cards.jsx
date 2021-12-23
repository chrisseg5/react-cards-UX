import React, {Component} from 'react'
import Card from './CardUI';
import img1 from'../assets/stock-photo-142984111.jpg'
class Cards extends Component{
    render(){
        return(
            <div className='container-fluid d-flex justify-content-center'>
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="title1" />
                    </div>
                    <div className="col-md-4">
                    <Card  imgsrc={img1} title="title2"/>

                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img1}  title="title3"/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;