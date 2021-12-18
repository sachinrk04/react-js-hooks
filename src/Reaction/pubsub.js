import PunNub from 'pubnub';
import pubnubConfig from './pubnub.config.json';

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

function PubSub() {
    const pubnub = new PunNub(pubnubConfig);

    pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });

    this.addListener = listenerConfig => {
        pubnub.addListener(listenerConfig);
    }

    this.publish = message => {
        console.log('Publish message---->', message);

        pubnub.publish({
            message,
            channel: MESSAGE_CHANNEL
        });
    }
}

export default PubSub;
