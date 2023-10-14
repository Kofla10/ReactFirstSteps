import React, {Fragment} from "react";
import Avatar from "./avatar";
import TextTest from "./textTest";

const ComponentTwo = ({data}) => {
    return (
        <Fragment>
            <h1> Test of Component 2</h1>
            <hr />
            <div className="card mb-3">
                <div className="row g-0">
                    <Avatar img ={data.img}/>
                    <div className="col-md-8">
                        <h5 className="card-title">title</h5>
                        <TextTest text={data.textOne}/>
                        <TextTest text={data.textTwo}/>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}
export default ComponentTwo;