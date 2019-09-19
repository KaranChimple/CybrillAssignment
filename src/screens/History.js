import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TrackerReducer from '../reducers/trackerReducer';
import {dataUpdate, dataCreate} from '../actions/index';

class History extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <View>
                <Text>History</Text>
            </View>
        );
    }
}


const mapStateToProps = state => {
    return {
        listOfAllData: state.listOfAllData,
    }
}


export default connect(mapStateToProps)(History);
