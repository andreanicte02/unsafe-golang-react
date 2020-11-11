import React from 'react';
import image1 from '../images/img1.jpg'
import image2 from '../images/img2.jpg'
import image3 from '../images/img3.jpg'
import FormComponent from "./FormComponent";
export default class MovieComponent extends React.Component {

    render() {
        return (
            <div class="color">

                <div>

                    {this.props.poster ===1 &&( <img src={image1} class="imageSize"/>)}

                    {this.props.poster ===2 &&( <img src={image2} class="imageSize"/>)}

                    {this.props.poster ===3 &&( <img src={image3} class="imageSize"/>)}

                    <div>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx <br />
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx <br />


                    </div>

                </div>

                <div background="">
                    <FormComponent/>
                </div>

            </div>

        );

    }


}
