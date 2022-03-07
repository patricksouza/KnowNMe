import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import * as NetInfo from "@react-native-community/netinfo";
import { List } from "react-native-paper";
import style from "./style";
const { CONSTANTS } = require("../../utils/constants");

export default function Wifi() {
  const [values, setValues] = useState({
    isConnected: "-",
    type: "-",
    bSsid: "-",
    ssid: "-",
    frequency: "-",
    ipAddress: "-",
    subnet: "-",
  });
  NetInfo.configure({
    reachabilityUrl: "https://clients3.google.com/generate_204",
    reachabilityTest: async (response) => response.status === 204,
    reachabilityLongTimeout: 60 * 1000, // 60s
    reachabilityShortTimeout: 5 * 1000, // 5s
    reachabilityRequestTimeout: 15 * 1000, // 15s
    reachabilityShouldRun: () => true,
    shouldFetchWiFiSSID: true,
  });

  async function getMyNetInfo() {
    const response = await NetInfo.fetch("wifi");
    setValues((values) => ({
      ...values,
      isConnected: !!response.isConnected
        ? CONSTANTS.CONNECTION_STATUS.UP
        : CONSTANTS.CONNECTION_STATUS.DOWN,
      type: response.type || "-",
      bSsid: response.details.bssid || "-",
      ssid: response.details.ssid || "-",
      frequency: response.details.frequency || "-",
      subnet: response.details.subnet || "-",
      ipAddress: response.details.ipAddress || "-",
    }));
  }

  setTimeout(() => {
    getMyNetInfo();
  }, 1000);

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.subContainer}>
          <List.Section>
            <List.Subheader style={style.subContainerTitle}>
              Connection
            </List.Subheader>
            <List.Item
              title="Wi-Fi Connection status"
              titleStyle={{ color: "#fff" }}
              descriptionStyle={{ color: "#fff" }}
              description={values.isConnected}
              descriptionStyle={{
                color:
                  values.isConnected === CONSTANTS.CONNECTION_STATUS.UP
                    ? "#32CD32"
                    : "#B22222",
                fontWeight: "bold",
              }}
            />
            <List.Item
              title="Frequency"
              titleStyle={{ color: "#fff" }}
              descriptionStyle={{ color: "#fff" }}
              description={values.frequency}
            />
          </List.Section>
        </View>
        <View style={style.subContainer}>
          <List.Section>
            <List.Subheader style={style.subContainerTitle}>
              Network
            </List.Subheader>
            <List.Item
              title="Ip Address"
              titleStyle={{ color: "#fff" }}
              descriptionStyle={{ color: "#fff" }}
              description={values.ipAddress}
            />
            <List.Item
              title="Subnet Mask"
              titleStyle={{ color: "#fff" }}
              descriptionStyle={{ color: "#fff" }}
              description={values.subnet}
            />
            <List.Item
              title="Network Type"
              titleStyle={{ color: "#fff" }}
              descriptionStyle={{ color: "#fff" }}
              description={values.type.toUpperCase()}
            />
          </List.Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
