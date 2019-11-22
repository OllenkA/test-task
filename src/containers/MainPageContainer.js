import React, {Component} from 'react';
import MainPage from "../components/MainPage/MainPage";


class MainPageContainer extends Component {
    state = {
        isButtonPressed: false,
    };

    onClickButton = () => {
        this.setState({isButtonPressed: !this.state.isButtonPressed})
    };

    render() {
        return <MainPage onClickButton={this.onClickButton}
                         isButtonPressed={this.state.isButtonPressed}/>
    }
}

export default MainPageContainer;
