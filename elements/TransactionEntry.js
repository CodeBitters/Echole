import React from "react";
import {StyleSheet, Text, View} from "react-native";

import Colors from "./Colors";

import {Feather, Ionicons} from "@expo/vector-icons";
import Config from "../configs/Config";

export function TransactionEntry({
                                     transactionID,
                                     amount,
                                     accountID,
                                     isIncome,
                                     category,
                                     description,
                                     transactionDate,
                                 }) {
    const transactionCategories = {
        food: "fast-food-outline",
        bill: "receipt-outline",
        transport: "train-outline",
        entertainment: "game-controller-outline",
        education: "book-outline",
        health: "medkit-outline",
        shopping: "cart-outline",
        salary: "cash-outline",
        saving: "save-outline",
        gift: "gift-outline",
        insurance: "shield-checkmark-outline",
        fund_transfer: "swap-horizontal-outline",
        investment: "content-save-all-outline",
    };

    // accountID to account name convertor
    const accountIDtoAccountConvertor = (accountID) => {
        for (const entry of Config.TransactionLedger.transactionAccounts) {
            if (entry['value'] === accountID)
                return entry['label'];
        }
    }

    let transactionCategoryIcon;
    if (transactionCategories[category])
        transactionCategoryIcon = transactionCategories[category];
    else transactionCategoryIcon = "alert-outline";


    return (
        <View style={baseStyle.container}>
            <View style={baseStyle.metaSection}>
                <View style={metaSectionStyles.container}>
                    <Feather
                        name={isIncome ? "arrow-down-right" : "arrow-up-right"}
                        size={30}
                        style={metaSectionStyles.icon}
                    />
                </View>
                <View style={metaSectionStyles.container}>
                    <Ionicons
                        name={transactionCategoryIcon}
                        size={30}
                        style={metaSectionStyles.icon}
                    />
                </View>
            </View>
            <View style={baseStyle.textSection}>
                <View style={textSectionStyles.accountArea}>
                    <Text numberOfLines={1} style={textSectionStyles.accountAreaText}>
                        {isIncome ? "To " : "From"} {accountIDtoAccountConvertor(accountID)}
                    </Text>
                </View>
                <View style={textSectionStyles.amountArea}>
                    <Text style={textSectionStyles.amountAreaText}>
                        Rs. {amount.toLocaleString('en')}
                        {Number.isInteger(amount) ? ".00" : ""}
                    </Text>
                </View>
                <View style={textSectionStyles.dateIDArea}>
                    <Text style={textSectionStyles.dateIDAreaTextID}>
                        TID{transactionID}
                    </Text>
                    <Text style={textSectionStyles.dateIDAreaTextDate}>
                        {transactionDate}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const baseStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        padding: 5,
        height: 130,
        width: 375,
        alignSelf: "center",
        borderRadius: 10,
        backgroundColor: Colors.ACCENT_COLOR,
        borderWidth: 1,
        shadowOffset: 3,
    },
    metaSection: {
        flex: 1,
    },
    textSection: {
        flex: 4,
    },
});

const metaSectionStyles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.SECONDARY_COLOR,
        borderRadius: 30,
        width: 50,
        height: 50,
        flex: 1,
        margin: 5,
        padding: 5,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        color: Colors.SECONDARY_COLOR,
    },
});

const textSectionStyles = StyleSheet.create({
    container: {},
    accountArea: {
        flex: 1,
    },
    amountArea: {
        flex: 2,
    },
    dateIDArea: {
        flex: 1,
        flexDirection: "row",
    },
    accountAreaText: {
        color: Colors.SECONDARY_COLOR,
        fontSize: 17,
        padding: 5
    },
    amountAreaText: {
        color: Colors.SECONDARY_COLOR,
        fontSize: 37,
        textAlign: "center",
        padding: 5,
    },
    dateIDAreaTextID: {
        color: Colors.SECONDARY_COLOR,
        fontSize: 16,
        textAlign: "left",
        flex: 1,
        padding: 5,
    },
    dateIDAreaTextDate: {
        color: Colors.SECONDARY_COLOR,
        fontSize: 16,
        textAlign: "right",
        flex: 1,
        padding: 5,
    },
});
