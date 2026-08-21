"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
;
function sendNotification(notification) {
    if ("recipient" in notification) {
        return ` Recieved an email\n recipient: ${notification.recipient}\n subject: ${notification.subject}\n`;
    }
    else if ("phone" in notification) {
        return ` Recieved an sms\n Phone: ${notification.phone}\n message: ${notification.message}\n`;
    }
    else if ("deviceID" in notification) {
        return ` Recieved a push notification\n device id: ${notification.deviceID}\n message: ${notification.message}\n`;
    }
    return " Invalid notification";
}
const mailNotify = { recipient: "Sameer", subject: "Typescript practice" };
const mobileNotify = { phone: 12345, message: "Phone notification" };
const pushNotify = { deviceID: 6293, message: "Push notification" };
console.log(sendNotification(mailNotify));
console.log(sendNotification(mobileNotify));
console.log(sendNotification(pushNotify));
//# sourceMappingURL=notificationSystem.js.map