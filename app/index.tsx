import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Logo from '../assets/image/logo.png';
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter();
  return (
    <View style = {styles.container}>
      <Image source = {Logo} style = {styles.logo}/>
      <Text style={styles.title}>Chào mừng đến với memo</Text>
      <Text style={styles.subtitle}>Nơi lưu giữ những khoảnh khắc đáng yêu!</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/auth/signup') }
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b937b08a',
    paddingHorizontal: 20,
  },
  logo: {
    aspectRatio: 1,
    marginBottom: 20, // Khoảng cách với tiêu đề bên dưới
    marginTop: -80, // Di chuyển lên trên
    width: 180, // Kích thước logo
    height: 180,
    },
  title: {
    fontWeight: 'bold', // Giả định bạn đã cài font Quicksand
    fontSize: 25, // Kích cỡ lớn hơn cho tiêu đề chính
    color: '#FFFFFF', // Màu tím đậm của logo
    textAlign: 'center',
    marginBottom: 8,
    },
  subtitle: {
    fontWeight: '500', // Font thường cho tiêu đề phụ
    fontSize: 15,
    color: '#F0F0F0', // Màu xám đậm
    textAlign: 'center',
    },
  button: {
    position: 'absolute', // Đặt nút ở vị trí tuyệt đối
    bottom: 80, // Cách đáy màn hình 40px
    width: '90%', // Chiều rộng của nút
    backgroundColor: '#ede7e7ff', // Màu xám nhạt
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
  },
})