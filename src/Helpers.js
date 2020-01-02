import React from 'react';
import { View, Alert, Text, } from 'react-native';
import SendSMS from 'react-native-sms';
const showAlert = (title, message) => {
    Alert.alert(title, message, [{ text: 'OK' },], { cancelable: true });
}

smsSendFunction = (number) => {

    SendSMS.send({
        body: 'Please follow us on https://reactnativecode.com',
        recipients: [number],
        //recipients: ['9928872286', '7014859919'],
        successTypes: ['sent', 'queued'],
        allowAndroidSendWithoutReadPermission: true
    }, (completed, cancelled, error) => {
        if (completed) {
            Alert.alert('SMS Sent Successfully.')
        } else if (cancelled) {
            console.log('SMS Sent Cancelled.');
        } else if (error) {
            console.log('Some error occured.');
        }
    });
}


export default showAlert;
