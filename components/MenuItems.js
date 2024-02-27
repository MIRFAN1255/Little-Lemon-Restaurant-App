import * as React from 'react';
import { View, Text, StyleSheet, FlatList, SectionList } from 'react-native';
import LittleLemonHeader from './LittleLemonHeader';
import LittleLemonFooter from './LittleLemonFooter';

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            { name: 'Hummus', price: '$5.00' },
            { name: 'Moutabal', price: '$5.00' },
            { name: 'Falafel', price: '$7.50' },
            { name: 'Marinated Olives', price: '$5.00' },
            { name: 'Kofta', price: '$5.00' },
            { name: 'Eggplant Salad', price: '$8.50' },
        ],
    },
    {
        title: 'Main Dishes',
        data: [
            { name: 'Lentil Burger', price: '$10.00' },
            { name: 'Smoked Salmon', price: '$14.00' },
            { name: 'Kofta Burger', price: '$11.00' },
            { name: 'Turkish Kebab', price: '$15.50' },
        ],
    },
    {
        title: 'Sides',
        data: [
            { name: 'Fries', price: '$3.00', id: '11K' },
            { name: 'Buttered Rice', price: '$3.00' },
            { name: 'Bread Sticks', price: '$3.00' },
            { name: 'Pita Pocket', price: '$3.00' },
            { name: 'Lentil Soup', price: '$3.75' },
            { name: 'Greek Salad', price: '$6.00' },
            { name: 'Rice Pilaf', price: '$4.00' },
        ],
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Baklava', price: '$3.00' },
            { name: 'Tartufo', price: '$3.00' },
            { name: 'Tiramisu', price: '$5.00' },
            { name: 'Panna Cotta', price: '$5.00' },
        ],
    },
];

const Item = ({ name,price }) => (
    <View style={styles.Container}>
        <Text style={styles.Text}>{name}</Text>
        <Text style={styles.Text}>{price}</Text>
    </View>
);

const MenuItems = () => {
    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;
    const Separator = () => <View style={styles.separator} />;
    renderSectionHeader = ({section: {title}}) => (
        <Text style={styles.sectionHeader}>{title}</Text>
    )

    return (
        <View>
            <LittleLemonHeader />
            <SectionList
                keyExtractor={(item, index) => item + index}
                sections={menuItemsToDisplay}
                renderItem={renderItem}
                ItemSeparatorComponent={Separator}
                renderSectionHeader={renderSectionHeader}>
            </SectionList>
            <LittleLemonFooter />
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        paddingVertical: 15,
    },
    Text: {
        color: '#F4CE14',
        fontSize: 25,
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: '#EDEFEE',
    },
    sectionHeader: {
        backgroundColor: '#fbdabb',
        color: '#333333',
        fontSize: 34,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
});

export default MenuItems;