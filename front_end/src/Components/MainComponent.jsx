import React from "react"
import axiosInstance from "../Axios/Axios";
import Button from '@material-ui/core/Button';

class MainComponent extends React.Component{

    constructor(props){
        super(props);
      
    }

    componentDidMount(){
        axiosInstance.get("api/books").then(response=>{
            console.log(response);
        })
    }

    render(){
        return(
            <div>sdklgjsdkljgdslkl</div>
//             <Button variant="contained" color="primary" disableElevation>
//  Disable elevation
//         </Button>
        );  
    }
}

export default MainComponent;