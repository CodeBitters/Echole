import {
    ActivityIndicator,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

import {Ionicons} from "@expo/vector-icons";

import Colors from "../elements/Colors";
import Config from "../configs/Config";

import {TransactionEntry} from "../elements/TransactionEntry";
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from "axios";
import {useEffect, useState} from "react";

export function TransactionHistory({navigation}) {

    // set data filters default values
    let toDateDefaultValue = new Date();
    let fromDateDefaultValue = new Date();
    fromDateDefaultValue.setDate(toDateDefaultValue.getDate() - 7)

    // describe required hooks
    const [transactionData, setTransactionData] = useState(null);
    const [toData, setToDate] = useState(toDateDefaultValue);
    const [fromData, setFromDate] = useState(fromDateDefaultValue);
    const [account, setAccount] = useState("");
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");

    function updateContent() {
        const api_url_data_fill = Config.System.baseAPIURL + "/get_ledger_entries" +
            "?from_date=" + fromData.toLocaleDateString() +
            "&to_date=" + toData.toLocaleDateString() +
            "&account=" + account +
            "&transaction_type=" + type +
            "&transaction_category=" + category;
        axios.get(api_url_data_fill)
            .then(response => {
                setTransactionData(response.data);
            })
    }

    useEffect(() => {
        updateContent()
    }, [setTransactionData, type, account, category, fromData, toData]);


    return (
        <SafeAreaView style={mainStyle.container}>
            <View style={mainStyle.headerSection}>
                <TouchableHighlight
                    onPress={() => {
                        navigation.pop();
                    }}
                >
                    <Ionicons
                        name="arrow-back-outline"
                        size={26}
                        color={Colors.SECONDARY_COLOR}
                        style={mainStyle.backIcon}
                    />
                </TouchableHighlight>

                <Text style={mainStyle.headerText}>Transaction History</Text>
            </View>
            <View style={mainStyle.bodySection}>
                <View style={mainStyle.filterSection}>
                    <View style={filterAreaStyles.container}>
                        <View style={filterAreaStyles.topLevelFiler}>
                            <RNPickerSelect
                                placeholder={{
                                    label: 'Tx Type',
                                    value: ''
                                }}
                                style={pickerSelectStyles}
                                onValueChange={(value) => setType(value)}
                                items={Config.TransactionLedger.transactionTypes}
                            />
                        </View>
                        <View style={filterAreaStyles.topLevelFiler}>
                            <RNPickerSelect
                                placeholder={{
                                    label: 'Account',
                                    value: ''
                                }}
                                style={pickerSelectStyles}
                                onValueChange={(value) => {
                                    setAccount(value);
                                    setTransactionData(null);
                                }}
                                items={Config.TransactionLedger.transactionAccounts}
                            />
                        </View>
                        <View style={filterAreaStyles.topLevelFiler}>
                            <RNPickerSelect
                                placeholder={{
                                    label: 'Tx Category',
                                    value: ''
                                }}
                                style={pickerSelectStyles}
                                onValueChange={(value) => setCategory(value)}
                                items={Config.TransactionLedger.transactionCategories}
                            />
                        </View>
                    </View>
                    <View style={filterAreaStyles.container}>
                        <View style={filterAreaStyles.lowLevelFilter}>
                            <View style={filterAreaStyles.lowLevelFilterText}>
                                <Text style={filterAreaStyles.filterDataDescription}>From : </Text>
                            </View>
                            <View style={filterAreaStyles.lowLevelFilterDate}>
                                <DateTimePicker value={fromData} maximumDate={toDateDefaultValue}
                                                onChange={(_, date) => {
                                                    setFromDate(date)
                                                }} themeVariant="dark"/>
                            </View>
                        </View>

                        <View style={filterAreaStyles.lowLevelFilter}>
                            <View style={filterAreaStyles.lowLevelFilterText}>
                                <Text style={filterAreaStyles.filterDataDescription}>&nbsp;&nbsp;To : </Text>
                            </View>
                            <View style={filterAreaStyles.lowLevelFilterDate}>
                                <DateTimePicker value={toData} maximumDate={toDateDefaultValue}
                                                onChange={(_, date) => {
                                                    setToDate(date)
                                                }} themeVariant="dark"/>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={mainStyle.entrySection}>
                    <ScrollView>
                        {
                            transactionData ? (
                                transactionData.length === 0 ? (
                                    <Text style={contentAreaStyles.noEntryPoster}>Sorry, no transaction meet all defined
                                        filtering criteria.</Text>
                                ) : (
                                    transactionData.map(entry =>
                                        <TransactionEntry
                                            isIncome={entry['transaction_type'] === 'INCOME'}
                                            category={entry['category']}
                                            amount={entry['amount']}
                                            transactionID={entry['transaction_id']}
                                            accountID={entry['account']}
                                            description={entry['description']}
                                            transactionDate={entry['transaction_date']}
                                            key={entry['transaction_id']}
                                        />
                                    )
                                )
                            ) : (<ActivityIndicator size="large" color={Colors.SECONDARY_COLOR}
                                                    style={contentAreaStyles.loadingSpinner}/>)
                        }
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

const mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.MAIN_COLOR,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    headerSection: {
        flex: 1,
        margin: 13,
        height: 10,
        flexDirection: "row",
    },

    bodySection: {
        flex: 22
    },

    filterSection: {
        flex: 4,
    },

    entrySection: {
        flex: 18,
    },

    backIcon: {
        flex: 1,
        borderColor: Colors.SECONDARY_COLOR,
        borderWidth: 2,
        borderRadius: 8,
        alignSelf: "center",
        verticalAlign: "middle",
        alignContent: "center",
    },

    headerText: {
        flex: 15,
        fontSize: 25,
        marginLeft: 15,
        fontWeight: "900",
        color: Colors.SECONDARY_COLOR,
    },

    selectInput: {
        padding: 10,
    },
});

const filterAreaStyles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        flexDirection: "row",
    },
    topLevelFiler: {
        padding: 5,
        flex: 1
    },
    lowLevelFilter: {
        flex: 1,
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10
    },
    lowLevelFilterText: {
        flex: 1,
    },
    lowLevelFilterDate: {
        flex: 2,
    },
    filterDataDescription: {
        color: Colors.SECONDARY_COLOR,
        fontSize: 18,
        textAlignVertical: "bottom",
        paddingTop: 7
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: Colors.SECONDARY_COLOR,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

const contentAreaStyles = StyleSheet.create({
    loadingSpinner: {
        margin: 50,
    },

    noEntryPoster: {
        color: Colors.SECONDARY_COLOR,
        fontSize: 20,
        textAlign: "center",
        padding: 30,
        fontStyle: "italic",
        fontWeight: "400",
    }
})