import React from "react";

export default class FormComponent extends React.Component {

    render() {

        return(

            <div width="100px" height="200px" class="backDiv">
            <form method="POST" encType="application/json"  charset="UTF-8" action="consumir serivico">

                <label class="colorLabel">Email:</label>
                <input type="email" name="email" id="email"/>
                <input type="submit" value="Descargar" />

            </form>

            </div>
        );

    }


}