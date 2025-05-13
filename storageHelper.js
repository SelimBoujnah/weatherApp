import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToStorage = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving to storage:', e);
  }
};

export const loadFromStorage = async (key) => {
  try {
    const json = await AsyncStorage.getItem(key);
    return json != null ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Error loading from storage:', e);
    return [];
  }
};

export const clearStorageKey = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Error clearing storage:', e);
  }
};
