import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from './state/reducer';
import Context from './context';
import PubSub from './pubsub';
import PublishMessage from './components/PublishMessage';
import MessageBoard from './components/MessageBoard';
import SetUsername from './components/SetUsername';

const pubsub = new PubSub();

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        pubsub.addListener({
            message: messageObject => {
                const { channel, message } = messageObject;
        
                console.log('Received message---->', message);
                console.log('Received channel---->', channel);
                dispatch(message);
            }
        });
    }, []);

    console.log('State---->', state);

    return (
        <Context.Provider value={{ state, dispatch, pubsub }}>
            <h2>Reaction</h2>
            <SetUsername />
            <hr />
            <PublishMessage />
            <hr />
            <MessageBoard />
        </Context.Provider>
    );
}

export default App;
