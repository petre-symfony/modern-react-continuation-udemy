import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component{
  static contextType = LanguageContext;

  renderSubmit(value){
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  render(){
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

    return (
      <ColorContext.Consumer>
        <button className="ui button primary">
          <LanguageContext.Consumer>
            { (value) => this.renderSubmit(value) }
          </LanguageContext.Consumer>
        </button>
      </ColorContext.Consumer>
    )
  }
}

//Button.contextType = LanguageContext;

export default Button;
