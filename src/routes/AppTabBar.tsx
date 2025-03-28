import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Box, Icon, Text, TouchableBox} from '@components';
import {useAppSafeArea} from '@hooks';
import {$shadowColor} from '@theme';

import {AppTabBottomTabParamList} from './AppTabNavigator';
import {mapScreenToProps} from './mapScreenToProps';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();

  return (
    <Box
      flexDirection="row"
      bg="surfaceElevated"
      pt="s12"
      style={[{paddingBottom: bottom}, $shadowColor]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const item =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableBox
            alignItems="center"
            key={route.key}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Icon
              name={isFocused ? item.icon.focused : item.icon.unfocused}
              size={20}
            />
            <Text
              preset="paragraphCaption"
              semiBold
              mt="s4"
              color={isFocused ? 'hoverPrimary' : 'textPrimary'}>
              {item.title}
            </Text>
          </TouchableBox>
        );
      })}
    </Box>
  );
}
