import React, {Component} from 'react';
import MainPage from "../components/MainPage/MainPage";


class MainPageContainer extends Component {
    state = {
        language: 'en',
    };

    changeLanguage = (language) => {
        this.setState({language: language})
    };

    render() {
        return <MainPage changeLanguage={this.changeLanguage}
                         language={this.state.language}/>
    }
}

export default MainPageContainer;
