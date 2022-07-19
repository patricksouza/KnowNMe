import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, Text } from "react-native";
import { List } from "react-native-paper";
import { Col, Row, Grid } from "react-native-easy-grid";
import style from "./style";
import DeviceInfo from "react-native-device-info";
var bytes = require("bytes");

export default function CellPhone() {
  const [values, setValues] = useState({
    id: "",
    battery: "",
    brand: "",
    baseOs: "",
    freeStorage: "",
    totalStorage: "",
    totalMemory: "",
    usedMemory: "",
  });

  function getAllCellData() {
    getBattery();
    getBrandName();
    getAndroidIp();
    getBaseOs();
    getFreeDisk();
    getTotalDiskCapacity();
    getTotalMemory();
    getUsedMemory();
  }

  async function getBattery() {
    await DeviceInfo.getBatteryLevel().then((battery) => {
      setValues((batteryValues) => ({ ...batteryValues, battery: battery || "-" }));
    });
  }

  async function getUsedMemory() {
    await DeviceInfo.getUsedMemory().then((usedMemory) => {
      setValues((values) => ({ ...values, usedMemory: usedMemory || "-" }));
    });
  }

  async function getFreeDisk() {
    await DeviceInfo.getFreeDiskStorage().then((free) => {
      setValues((values) => ({ ...values, freeStorage: free || "-" }));
    });
  }

  async function getTotalMemory() {
    await DeviceInfo.getTotalMemory().then((total) => {
      setValues((values) => ({ ...values, totalMemory: total || "-" }));
    });
  }

  async function getTotalDiskCapacity() {
    await DeviceInfo.getTotalDiskCapacity().then((total) => {
      setValues((values) => ({ ...values, totalStorage: total || "-" }));
    });
  }

  async function getBaseOs() {
    await DeviceInfo.getBaseOs().then((baseOs) => {
      setValues((values) => ({ ...values, baseOs: baseOs || "-" }));
    });
  }

  async function getAndroidIp() {
    await DeviceInfo.getAndroidId().then((androidId) => {
      setValues((values) => ({ ...values, id: androidId || "-" }));
    });
  }

  async function getBrandName() {
    const response = await DeviceInfo.getBrand();
    setValues((values) => ({ ...values, brand: response || "-" }));
  }

  useEffect(() => {
    getAllCellData();
  }, []);
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Grid>
          <Text style={style.title}>General</Text>
          <Row style={{ padding: 2 }}>
            <Col size={20} style={{ padding: 10 }}>
              <View style={style.subContainer}>
                <List.Item
                  title="ID"
                  titleStyle={{ color: "grey", fontSize: 15 }}
                  descriptionStyle={{
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: "600",
                  }}
                  description={values.id}
                />
              </View>
            </Col>
            <Col size={12} style={{ padding: 10 }}>
              <View style={style.subContainer}>
                <List.Item
                  title="Battery Life"
                  titleStyle={{ color: "grey", fontSize: 15 }}
                  descriptionStyle={{
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: "600",
                  }}
                  description={Number(values.battery).toFixed(2) * 100 + "%"}
                />
              </View>
            </Col>
          </Row>
          <Row style={{ padding: 2 }}>
            <Col size={8} style={{ padding: 10 }}>
              <View style={style.subContainer}>
                <List.Item
                  title="Brandname"
                  titleStyle={{ color: "grey", fontSize: 15 }}
                  descriptionStyle={{
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: "600",
                  }}
                  description={values.brand}
                />
              </View>
            </Col>
            <Col size={10} style={{ padding: 10 }}>
              <View style={style.subContainer}>
                <List.Item
                  title="Base OS"
                  titleStyle={{ color: "grey", fontSize: 15 }}
                  descriptionStyle={{
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: "600",
                  }}
                  description={values.baseOs}
                />
              </View>
            </Col>
          </Row>
          <Text style={style.title}>Resources</Text>
          <Row style={{ padding: 2 }}>
            <Col size={10} style={{ padding: 10 }}>
              <View style={style.subContainer}>
                <List.Item
                  title="Memory"
                  titleStyle={{ color: "grey", fontSize: 15 }}
                  descriptionStyle={{
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: "600",
                  }}
                  description={bytes(values.totalMemory)}
                />
              </View>
            </Col>
            <Col size={10} style={{ padding: 10 }}>
              <View style={style.subContainer}>
                <List.Item
                  title="Memory in use"
                  titleStyle={{ color: "grey", fontSize: 15 }}
                  descriptionStyle={{
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: "600",
                  }}
                  description={bytes(values.usedMemory)}
                />
              </View>
            </Col>
          </Row>
          <Row style={{ padding: 2 }}>
            <Col size={10} style={{ padding: 10 }}>
              <View style={style.subContainer}>
                <List.Item
                  title="Free Storage"
                  titleStyle={{ color: "grey", fontSize: 15 }}
                  descriptionStyle={{
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: "600",
                  }}
                  description={bytes(values.freeStorage)}
                />
              </View>
            </Col>
            <Col size={10} style={{ padding: 10 }}>
              <View style={style.subContainer}>
                <List.Item
                  title="Total Storage"
                  titleStyle={{ color: "grey", fontSize: 15 }}
                  descriptionStyle={{
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: "600",
                  }}
                  description={bytes(values.totalStorage)}
                />
              </View>
            </Col>
          </Row>
        </Grid>
      </ScrollView>
    </SafeAreaView>
  );
}
