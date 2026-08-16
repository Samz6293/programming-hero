type notification = email | sms | push;

interface email {
    recipient: string,
    subject: string
};

interface sms {
    phone: number,
    message: string
};

interface push {
    deviceID: number,
    message: string
}

function sendNotification(notification: notification): string {
    return "not complete";
}
const mailNotify: email = {recipient: "Sameer", subject: "Typescript practice"};
const mobileNotify: sms = {phone: 12345, message: "Phone notification"};
const pushNotify: push = {deviceID: 6293, message: "Push notification"};