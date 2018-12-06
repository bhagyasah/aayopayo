import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  View, Text, Spinner,
} from 'native-base';

const renderNotification = (notifications, idx, modal, markNotificationRead) => (
  <TouchableOpacity
    onPress={() => markNotificationRead(notifications.id)}
    key={idx}
    style={{
      padding: 10,
      backgroundColor: notifications.readStatus ? '#fff' : '#E3F2FD',
      borderBottomWidth: 1,
      borderBottomColor: '#757575',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        {notifications.title}
      </Text>
      {(notifications.readStatus && modal.readNotificationSpinner === notifications.id)
        ? <Text>{notifications.content}</Text>
        : null
      }
      { (modal.readNotificationSpinner === notifications.id && !notifications.readStatus) ? <Spinner size="small" style={{ position: 'absolute' }} /> : null}
    </View>
  </TouchableOpacity>
);

export default CustomContent = ({ modal, markNotificationRead }) => (
  <View>
    {modal.content.map((notification, idx) => renderNotification(notification, idx, modal, markNotificationRead))}
  </View>
);
