import React, { Component } from 'react'
export default class Results extends Component {


    render(){
        return(
                 
            <div className="all">

                    {/* // <!-- show informatin of entry.   Bootstrap website --> */}

                    <div className="info" id = "answer">
    
                        <div className="card Total">
                            
                            <div className="card-body">
                                
                                <div className="card-text"> 

                               
                                   
                                    <div>Total Score:
                                        {this.props.totalscore}
                                    </div>
    
                                                             
                               </div>
                        </div>

                        </div>
                   

            <div class="row no-gutter">
                    <div className="col-md-6">Berg Score Fall Risk Interpretation</div>
                        {/* <div className="col-md-3">Fall Risk Interpretation</div> */}
                        
                        <div className=" w-100"></div>
                        <div className="col-md-6">45-56</div>
                        <div className=" col-md-6">Patient is mostly independent in their movement and carries a low risk of falling.</div>
                        <div className="w-100"></div>
                
                        <div className="col-md-6">41-44</div>
                        <div className=" col-md-6">Patient is mostly independent in their movement but carries a significant risk of falling.</div>
                        <div className="w-100"></div>
                        <div className="col-md-6">21-40</div>
                        <div className=" col-md-6">	Patient may require assistance performing some of the tasks in the balance test and in general, activities of daily living. There is a 100% fall risk.</div>
                        <div className="w-100"></div>
                        <div className="col-md-6">0-20</div>
                        <div className=" col-md-6">	The patient is wheelchair bound at the moment or may be in the future and carries a 100% fall risk.</div>
                    </div>
                    </div>
                    </div>
        )
    }
}
