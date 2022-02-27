import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { List } from "react-native-paper";
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
  });

  function getAllCellData() {
    getBattery();
    getBrandName();
    getAndroidIp();
    getBaseOs();
    getFreeDisk();
    getTotalDiskCapacity();
    getTotalMemory();
  }

  async function getBattery() {
    await DeviceInfo.getBatteryLevel().then((battery) => {
      setValues((values) => ({ ...values, battery: battery || "-" }));
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
        <View style={style.subContainer}>
          <List.Section>
            <List.Subheader style={style.divided}>General</List.Subheader>
            <List.Item
              title="ID"
              titleStyle={{ color: "#fff" }}
              descriptionStyle={{ color: "#fff" }}
              description={values.id}
            />
            <List.Item
              title="Battery Life"
              titleStyle={{ color: "#fff" }}
              descriptionStyle={{ color: "#fff" }}
              description={Number(values.battery).toFixed(2) * 100 + "%"}
            />
            <List.Item
              title="Brandname"
              titleStyle={{ color: "#fff" }}
              descriptionStyle={{ color: "#fff" }}
              description={values.brand}
            />
            <List.Item
              title="Base OS"
              titleStyle={{ color: "#fff" }}
              descriptionStyle={{ color: "#fff" }}
              description={values.baseOs}
            />
            <List.Item
              title="Memory"
              titleStyle={{ color: "#fff" }}
              descriptionStyle={{ color: "#fff" }}
              description={bytes(values.totalMemory)}
            />
          </List.Section>
        </View>
        <View style={style.subContainer}>
          <List.Section>
            <List.Subheader style={style.divided}>Storage</List.Subheader>
            <List.Item
              title="Free Storage"
              titleStyle={{ color: "#fff" }}
              descriptionStyle={{ color: "#fff" }}
              description={bytes(values.freeStorage)}
            />
            <List.Item
              title="Total Storage"
              titleStyle={{ color: "#fff" }}
              descriptionStyle={{ color: "#fff" }}
              description={bytes(values.totalStorage)}
            />
          </List.Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
