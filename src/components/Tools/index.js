import React from "react";
import { Text, View } from "react-native";
import { Modal, Portal, Button, Provider } from "react-native-paper";
import style from "./style";

export default function Tools() {
  const [visiblePing, setVisiblePing] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const showModalPing = () => setVisiblePing(true);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const hideModalPing = () => setVisiblePing(false);

  return (
    <View style={style.container}>
      <Provider>
        <Portal>
          <Modal
            visible={visiblePing}
            onDismiss={hideModalPing}
            contentContainerStyle={style.modalContainer}
          >
            <Text style={style.modalBodyContent}>Example Modal. Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
        <Button
          style={{ marginTop: 30, backgroundColor: "#262626", margin: 10 }}
          onPress={showModalPing}
        >
          <Text style={{color: "#fff"}}>Open Ping Tool</Text>
        </Button>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={style.modalContainer}
          >
            <Text>Example Modal. Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
        <Button
          style={{ marginTop: 20, backgroundColor: "#262626", margin: 10 }}
          onPress={showModal}
        >
          <Text style={{color: "#fff"}}>Open Ping Tool</Text>
        </Button>
      </Provider>
    </View>
  );
}
