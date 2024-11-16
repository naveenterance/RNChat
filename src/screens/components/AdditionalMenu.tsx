import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Menu} from 'react-native-paper';
import MenuItemWithHideOption from './MenuItems';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const AdditionalMenu = (props: {options: any; icon?: any}) => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <Menu
      contentStyle={styles.additionalMenu}
      visible={open}
      anchorPosition="bottom"
      onDismiss={closeMenu}
      anchor={
        <MaterialIcon
          name={props.icon ? props.icon : 'dots-vertical'}
          onPress={openMenu}
          size={25}
        />
      }>
      {props.options.map(item => {
        return (
          <MenuItemWithHideOption
            titleStyle={styles.titleText}
            style={styles.menuItem}
            title={item.title}
            key={item.title}
            onPress={() => {
              closeMenu();
              item.handler();
            }}
            hidden={item.hidden}
          />
        );
      })}
    </Menu>
  );
};

const useStyles = () =>
  StyleSheet.create({
    titleText: {
      color: 'black',
    },
    additionalMenu: {
      backgroundColor: '#fff',
    },
    menuItem: {},
  });

export default AdditionalMenu;
