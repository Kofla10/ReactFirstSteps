import React, {Fragment} from "react";

const Avatar = ({img})=>{
    console.log(img)
    return (
        <Fragment>
            <div className="col-md-4">
                <img  className="img-fluid rounded-start"  src={img} alt="" />
            </div>
        </Fragment>
    );
}

export default Avatar;