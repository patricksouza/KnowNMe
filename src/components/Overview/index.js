import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import axios from "axios";

// Structure imports
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import { DataTable, Button, Searchbar, Snackbar } from "react-native-paper";
import { Col, Grid, Row } from "react-native-easy-grid";

// Utils functions
const { validateIp } = require("../../utils/functions");
const { CONSTANTS } = require("../../utils/constants");

// Refresh Control
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

// Style imports
import style from "./style";

export default function Overview() {
  const [data, setData] = useState({});
  const [snackDynamicText, setSnackDynamicText] = useState();
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dataOfIp, setDataOfIp] = useState({});
  const [visible, setVisible] = useState(false);
  const [inputQueryStatus, setInputQueryStatus] = useState("#fff");
  const [refreshing, setRefreshing] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getMyIp();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  setTimeout(() => {
    NetInfo.addEventListener((state) => {
      setConnectionStatus(state.isWifiEnabled || state.isConnected);
    });
  }, 1000);

  const myDataObj = {
    ipAddress: data["ip"] || " -",
    company: dataOfIp["as"] || "-",
    country: dataOfIp["country"] || "-",
    city: dataOfIp["city"] || "-",
    region: dataOfIp["region"] || "-",
    regionName: dataOfIp["regionName"] || "-",
    timeZone: dataOfIp["timezone"] || "- / -",
    countryCode: dataOfIp["countryCode"] || "-",
    zipCode: dataOfIp["zip"] || "-",
    isp: dataOfIp["isp"] || "-",
  };

  async function generateIpData(ipTarget) {
    const getMyIpData = "http://ip-api.com/json/#";
    const newRequest = getMyIpData.replace("#", ipTarget);
    let hasError = null;
    const response = await axios.get(newRequest).catch((err) => {
      if (err.response) {
        hasError = err;
      }
    });
    if (
      response.data["status"].toUpperCase() === CONSTANTS.STATUS.FAIL ||
      hasError !== null
    ) {
      setSnackDynamicText("Private range or just failed!");
      onToggleSnackBar();
    }
    setDataOfIp(response.data);
    setSnackDynamicText("Data updated!");
    onToggleSnackBar();
  }
  async function getMyIp() {
    if (!connectionStatus) {
      setSnackDynamicText("No internet connection!");
      onToggleSnackBar();
      return;
    }
    const getMyIpAPI = "https://api.ipify.org?format=json";
    const response = await axios.get(getMyIpAPI);
    setData(response.data);
    if (!!response.data["ip"]) {
      generateIpData(response.data["ip"] || "#");
    }
  }

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    if (validateIp(query)) {
      setInputQueryStatus("#fff");
      generateIpData(query);
    } else {
      setInputQueryStatus("#B22222");
    }
  };

  useEffect(() => {
    //getMyIp();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={style.container}>
          <Grid>
            <Row style={{ padding: 5 }}>
              <Col size={10} style={{ padding: 5 }}>
                <Text style={style.title}>
                  My IP Address:{" "}
                  <Text style={{ color: "#F4717F", fontWeight: "bold" }}>
                    {myDataObj.ipAddress}
                  </Text>
                </Text>
              </Col>
            </Row>
            <Row>
              <Col size={10} style={{ padding: 5 }}>
                <View style={style.containerButton}>
                  <Button
                    mode="contained"
                    style={style.button}
                    onPress={getMyIp}
                  >
                    Reload
                  </Button>
                </View>
              </Col>
            </Row>
          </Grid>
          <Searchbar
            style={style.searchBar}
            placeholder="Type an ip"
            placeholderTextColor="#fff"
            iconColor="#fff"
            inputStyle={{ color: inputQueryStatus }}
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <Text style={style.subTitle}>Country Information</Text>
          <View style={style.subContainer}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={style.cellContainer}>Time Zone</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={style.cellContainer}>Country</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={style.cellContainer}>City</Text>
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <View style={{ flexGrow: 1, flexDirection: "row" }}>
                  <Text style={style.cellContainer}>{myDataObj.timeZone}</Text>
                  <Text style={style.cellContainer}>
                    {myDataObj.country} {""}({myDataObj.countryCode})
                  </Text>
                  <Text style={style.cellContainer}>{myDataObj.city}</Text>
                </View>
              </DataTable.Row>
            </DataTable>
          </View>
          <Text style={style.subTitle}>Company Information</Text>
          <View style={style.subContainer}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={style.cellContainer}>Company</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={style.cellContainer}>Provider</Text>
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <View style={{ flexGrow: 1, flexDirection: "row" }}>
                  <Text style={style.cellContainer}>{myDataObj.company}</Text>
                  <Text style={style.cellContainer}>{myDataObj.isp}</Text>
                </View>
              </DataTable.Row>
            </DataTable>
          </View>
          <Text style={style.subTitle}>My Address</Text>
          <View style={style.subContainer}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{ flex: 1.5 }}>
                  <Text style={style.cellContainer}>Region Name</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={style.cellContainer}>Region</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={style.cellContainer}>Zip Code</Text>
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <View style={{ flexGrow: 1, flexDirection: "row" }}>
                  <Text
                    style={{ flex: 1.5, width: 10, margin: 2, color: "#fff" }}
                  >
                    {myDataObj.regionName}
                  </Text>
                  <Text style={style.cellContainer}>{myDataObj.region}</Text>
                  <Text style={style.cellContainer}>{myDataObj.zipCode}</Text>
                </View>
              </DataTable.Row>
            </DataTable>
          </View>
        </View>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          style={style.snackContainer}
          action={{
            label: "Close",
            color: "#F4717F",
            onPress: () => {
              onDismissSnackBar();
            },
          }}
        >
          {snackDynamicText}
        </Snackbar>
      </ScrollView>
    </SafeAreaView>
  );
}
