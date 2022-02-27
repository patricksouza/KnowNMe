import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import axios from "axios";

// Structure imports
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { DataTable, Button, Searchbar, Snackbar } from "react-native-paper";
import { Col, Grid } from "react-native-easy-grid";

// Utils functions
const { validateIp } = require("../../utils/functions");
const { CONSTANTS } = require("../../utils/constants");

// Style imports
import style from "./style";

export default function Overview() {
  const [data, setData] = useState({});
  const [snackDynamicText, setSnackDynamicText] = useState();
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dataOfIp, setDataOfIp] = useState({});
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  setTimeout(() => {
    NetInfo.addEventListener((state) => {
      setConnectionStatus(state.isWifiEnabled || state.isConnected);
    });
  }, 0);

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
    const response = await axios.get(newRequest);
    if (response.data["status"].toUpperCase() === CONSTANTS.STATUS.FAIL) {
      setSnackDynamicText("Private range or just failed!");
      onToggleSnackBar();
    }
    setDataOfIp(response.data);
  }
  async function getMyIp(status = true) {
    if (!connectionStatus) {
      setSnackDynamicText("No internet connection!");
      onToggleSnackBar();
      return;
    }
    const getMyIpAPI = "https://api.ipify.org?format=json";
    const response = await axios.get(getMyIpAPI).finally(() => {
      if (!!status) {
        setSnackDynamicText("Data updated!");
        onToggleSnackBar();
      }
    });
    setData(response.data);
    if (!!response.data["ip"]) {
      generateIpData(response.data["ip"] || "#");
    }
  }

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    if (validateIp(query)) {
      generateIpData(query);
    }
  };

  useEffect(() => {
    //getMyIp(false);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <Grid>
            <Col style={{ width: 285 }}>
              <Text style={style.title}>
                My IP Address:{" "}
                <Text style={{ color: "#F4717F", fontWeight: "bold" }}>
                  {myDataObj.ipAddress}
                </Text>
              </Text>
            </Col>
            <Col>
              <View style={style.containerButton}>
                <Button mode="contained" style={style.button} onPress={getMyIp}>
                  Reload
                </Button>
              </View>
            </Col>
          </Grid>
          <Searchbar
            style={style.searchBar}
            placeholder="Type an ip"
            placeholderTextColor="#fff"
            iconColor="#fff"
            inputStyle={{color: "#fff"}}
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
