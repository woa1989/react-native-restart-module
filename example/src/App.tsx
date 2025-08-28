import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { restart } from 'react-native-restart-module';

export default function App() {
  const [counter, setCounter] = useState<number>(0);

  const handleRestart = () => {
    Alert.alert(
      '确认重启',
      '您确定要重启应用吗？',
      [
        {
          text: '取消',
          style: 'cancel',
        },
        {
          text: '普通重启',
          onPress: () => {
            console.log('正在普通重启应用...');
            restart();
          },
        },
      ],
      { cancelable: false }
    );
  };

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Restart Module Demo</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>计数器测试</Text>
        <Text style={styles.result}>计数: {counter}</Text>
        <TouchableOpacity style={styles.button} onPress={incrementCounter}>
          <Text style={styles.buttonText}>增加计数</Text>
        </TouchableOpacity>
        <Text style={styles.description}>
          点击增加计数，然后点击重启按钮来验证应用重启后计数器是否重置
        </Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={[styles.button, styles.restartButton]}
          onPress={handleRestart}
        >
          <Text style={[styles.buttonText, styles.restartButtonText]}>
            重启应用
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    minWidth: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
  },
  result: {
    fontSize: 16,
    marginBottom: 15,
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  restartButton: {
    backgroundColor: '#FF3B30',
    marginBottom: 8,
  },
  restartButtonText: {
    fontWeight: 'bold',
  },
  optimizedButton: {
    backgroundColor: '#FF9500',
    marginBottom: 8,
  },
  optimizedButtonText: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 5,
  },
  warning: {
    fontSize: 12,
    color: '#FF3B30',
    textAlign: 'center',
    fontWeight: '500',
  },
});
